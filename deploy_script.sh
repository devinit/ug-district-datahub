#!/bin/bash
## gets run on host server

export BASH_ENV="$HOME/.bashrc"
APP_NAME="ug-district-datahub"
ORG_NAME="devinit"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR=$SCRIPT_DIR
DOMAIN="live/$SITE_URL"
CERTBOT_SUB_DIR='ssl/'$DOMAIN
FULL_CHAIN_SOURCE=$APP_DIR'/'$CERTBOT_SUB_DIR'/fullchain.pem'
PRIV_KEY_SOURCE=$APP_DIR'/'$CERTBOT_SUB_DIR'/privkey.pem'
FULL_CHAIN_DESTINATION=$APP_DIR'/ssl/fullchain.pem'
PRIV_KEY_DESTINATION=$APP_DIR'/ssl/privkey.pem'
REPOSITORY="https://github.com/"$ORG_NAME"/"$APP_NAME".git"
FIRST_RUN="0"

export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

source $NVM_DIR"/nvm.sh";
nvm install v16.20.2
nvm use v16.20.2

function init_letsencrypt {

    if ! [ -x "$(command -v docker compose)" ]; then
        echo 'Error: docker compose is not installed.' >&2
        exit 1
    fi

    domains=("$SITE_URL")
    rsa_key_size=4096
    data_path="./certbot"
    email="wakibic@gmail.com" # Adding a valid address is strongly recommended
    staging=0 # Set to 1 if you're testing your setup to avoid hitting request limits

    if [ -d "$data_path" ]; then
        read -p "Existing data found for $domains. Continue and replace existing certificate? (y/N) " decision
        if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
            exit
        fi
    fi


    if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
        echo "### Downloading recommended TLS parameters ..."
        mkdir -p "$data_path/conf"
        curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
        curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
        echo
    fi

    echo "### Creating dummy certificate for $domains ..."
    path="/etc/letsencrypt/live/$domains"
    mkdir -p "$data_path/conf/live/$domains"
    docker compose run --rm --entrypoint "\
    openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1\
        -keyout '$path/privkey.pem' \
        -out '$path/fullchain.pem' \
        -subj '/CN=localhost'" certbot
    echo


    echo "### Building services ..."
    docker compose build db
    docker compose build --no-cache web
    echo "### Building Nginx ..."
    docker compose build nginx
    docker compose build certbot
    echo "### Starting web ..."
    docker compose up -d web
    echo "### Starting nginx ..."
    docker compose up --force-recreate -d nginx
    echo

    echo "### Deleting dummy certificate for $domains ..."
    docker compose run --rm --entrypoint "\
    rm -Rf /etc/letsencrypt/live/$domains && \
    rm -Rf /etc/letsencrypt/archive/$domains && \
    rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot
    echo


    echo "### Requesting Let's Encrypt certificate for $domains ..."
    #Join $domains to -d args
    domain_args=""
    for domain in "${domains[@]}"; do
        domain_args="$domain_args -d $domain"
    done

    # Select appropriate email arg
    case "$email" in
        "") email_arg="--register-unsafely-without-email" ;;
        *) email_arg="--email $email" ;;
    esac

    # Enable staging mode if needed
    if [ $staging != "0" ]; then staging_arg="--staging"; fi

    docker compose run --rm --entrypoint "\
    certbot certonly --webroot -w /var/www/certbot \
        $staging_arg \
        $email_arg \
        $domain_args \
        --rsa-key-size $rsa_key_size \
        --agree-tos \
        --non-interactive \
        --force-renewal" certbot
    echo

    echo "### Reloading nginx ..."
    docker compose exec nginx nginx -s reload
    echo

}

if [ -d $APP_DIR ]; then
      cd $APP_DIR
fi

npm install
npm run build

echo "Building docker"

if [ ! -f $FULL_CHAIN_DESTINATION ]; then
    FIRST_RUN='1'
    init_letsencrypt
fi

docker compose build db
docker compose build --no-cache web
docker compose build nginx
docker compose build certbot

docker compose down --remove-orphans
docker compose up -d

docker compose exec -T web python manage.py migrate --noinput
docker compose exec -T web python manage.py collectstatic --noinput


if [ $FIRST_RUN == "1" ]; then
    docker compose restart web
fi
