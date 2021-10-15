#!/bin/sh

docker kill $(docker ps -q)
docker rm 	$(docker ps -a -q)
cd server/
docker build -f ./Dockerfile.mongo -t mongo-db-img .
docker run --rm -d --env-file ../.env -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -e MONGO_INITDB_DATABASE=ricknmorty_db \
   --name db -p 27017:27017 $(docker images | tail -1 | awk '{ print $1;}')