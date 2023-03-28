#!/bin/bash
## gets run on host server

export BASH_ENV="$HOME/.bashrc"
APP_NAME="ug-district-datahub"
ORG_NAME="devinit"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR=$SCRIPT_DIR
DOMAIN="live/datahub.go.ug"
CERTBOT_SUB_DIR='ssl/'$DOMAIN
FULL_CHAIN_DESTINATION=$APP_DIR'/'$CERTBOT_SUB_DIR'/fullchain.pem'
PRIV_KEY_DESTINATION=$APP_DIR'/'$CERTBOT_SUB_DIR'/privkey.pem'
REPOSITORY="https://github.com/"$ORG_NAME"/"$APP_NAME".git"
FIRST_RUN="0"

export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

if [ -d $APP_DIR ]; then
      cd $APP_DIR
fi

if [ ! -f $FULL_CHAIN_DESTINATION ]; then
    FIRST_RUN='1'
    mkdir -p $APP_DIR'/'$CERTBOT_SUB_DIR
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout $PRIV_KEY_DESTINATION -out $FULL_CHAIN_DESTINATION -subj "/C=UG/ST=Kampala/L=Kampala/O=Global Security/OU=Devs/CN=datahub.go.ug"
fi


cd ~/git/ug-district-datahub || exit

npm install
npm run build

echo "Building docker"

docker-compose build db
docker-compose build --no-cache web
docker-compose build nginx
docker-compose build certbot

docker-compose down --remove-orphans
docker-compose up -d

docker-compose exec -T web python manage.py migrate --noinput
docker-compose exec -T web python manage.py collectstatic --noinput

if [ $FIRST_RUN == "1" ]; then
    docker-compose restart web
fi
