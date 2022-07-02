## How to build?

Stop all containers
	docker stop $(docker ps -q)

Starting your docker
	docker-compose up --build

How works the Folders structure:
The Features/EndPoints stay at the Domains Folder

sudo chmod -R 777 ./storage

## Patterns

The Folders has create based at [Ala](https://github.com/kiwfy/ala-microservice) patterns, we Have a Folder called Domain an We'll include our Feature/EndPoint in there. Inside of them, we have:
```
	Business: Bussines Rules

	Http:
		Controllers: Feature Controllers
		Filters: Requests Feature Filters and Call Validator
		Parameters: DataBase Params
		Validators: Validation fields

	Repositores: Our DataBase sctructure

	Services: Utils to use inside the feature
```
