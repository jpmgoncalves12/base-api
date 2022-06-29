## How to build?

Stop all containers
	docker stop $(docker ps -q)

Starting your docker
	docker-compose up --build

How works the Folders structure:
The Features/EndPoints stay at the Domains Folder

## Patterns

The Folders has create based at [Ala](https://github.com/kiwfy/ala-microservice) patterns, we Have a Folder called Domain an We'll include our Feature/EndPoint in there. Indide of them, we have:
```
	Business: Bussines Rules

	Http:
		Controllers: Feature Controllers
		Filters: Requests Feature Filters
		Parameters: DataBase Parameters
		Validators: Validation to use at

	Repositores: Our DataBase sctructure

	Services: Utils to use inside the feature
```
