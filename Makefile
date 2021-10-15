.PHONY: server-up server-down db-only

db-only:
	docker kill $(shell docker ps -q); \
	docker rm 	$(shell docker ps -a -q); \
	cd ./server/; \
	docker build -f ./Dockerfile.mongo -t mongo-db-img .; \
	docker run --rm -d --env-file ../.env -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -e MONGO_INITDB_DATABASE=ricknmorty_db  --name db -p 27017:27017 $(shell docker images | tail -1 | awk '{ print $1;}')

server-up:
	cd ./server/; \
	docker build -t rick-api -f ./Dockerfile.api .; \
	docker run --rm -p 8088:8088 --name api rick-api \

server-down:
	docker stop api