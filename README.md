Stop all containers
	docker stop $(docker ps -q)

Starting your docker
	docker-compose up --build

How works the Folders structure:
The Features/EndPoints stay at the Domains Folder

The structure Domain Folder has create based at [Ala](https://github.com/kiwfy/ala-microservice)
	Business: Bussines Rules
	Http:
		Controllers: Feature Controllers
		Filters: Requests Feature Filters
		Parameters: DataBase Parameters
		Validators: Validation to use at
	Repositores: ##

	Services:
		Utils to use at the specif feature or in 
