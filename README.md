Stop all containers
	docker stop $(docker ps -qa)

Starting your docker
	docker-compose up --build
