Stop all containers
	docker stop $(docker ps -q)

Starting your docker
	docker-compose up --build
