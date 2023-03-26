#!/bin/bash
## gets run on host server

APP_NAME="ug-district-datahub"
ORG_NAME="devinit"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR=$SCRIPT_DIR'/'$APP_NAME
SSL_SUB_DIR="config/nginx"
CERTBOT_SUB_DIR="ssl"
FULL_CHAIN_LOCATION=$APP_DIR'/'$SSL_SUB_DIR'/fullchain.pem'
PRIV_KEY_LOCATION=$APP_DIR'/'$SSL_SUB_DIR'/privkey.pem'
FULL_CHAIN_DESTINATION=$APP_DIR'/'$CERTBOT_SUB_DIR'/fullchain.pem'
PRIV_KEY_DESTINATION=$APP_DIR'/'$CERTBOT_SUB_DIR'/privkey.pem'
REPOSITORY="https://github.com/"$ORG_NAME"/"$APP_NAME".git"
FIRST_RUN="0"


echo "clone current branch if not exists"

if [ -d $APP_DIR ]; then
      cd $APP_DIR
  {
      echo "Cloning new content from develop"
      git fetch
      git stash
      git checkout develop
      git reset --hard origin/dev
      } || {
      echo "Failed to update from git repository"
      exit 20;
  }
else
  {
      git clone -b develop $REPOSITORY

      } || {
      echo "Failed to perform git clone on $REPOSITORY with branch dev"
      exit 20;
  }
fi

if [ ! -f $FULL_CHAIN_DESTINATION ]; then
    $FIRST_RUN='1'
    cp $FULL_CHAIN_LOCATION $FULL_CHAIN_DESTINATION
fi

if [ ! -f $PRIV_KEY_LOCATION ]; then
    $FIRST_RUN='1'
    cp $PRIV_KEY_LOCATION $PRIV_KEY_DESTINATION
fi

cd ~/git/ug-district-datahub || exit

echo "Building docker"

docker-compose build db
docker-compose build --no-cache web
docker-compose build nginx
docker-compose build certbot

docker-compose down --remove-orphans
docker-compose up -d

docker-compose exec -T web python manage.py migrate

if [ $FIRST_RUN == "1"]; then
    docker-compose restart web
fi
