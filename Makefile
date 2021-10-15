.PHONY: server-up server-down db-only server-nodemon

server-nodemon:
	./scripts/server-start.sh

db-only:
	./scripts/db-only.sh

server-up:
	cd ./server/; \
	docker build -t rick-api -f ./Dockerfile.api .; \
	docker run --rm -p 8088:8088 --name api rick-api \

server-down:
	docker stop api