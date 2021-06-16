# YoungRes Backend App

Backend application on the YoungRes project.

## Struture

This is a docker project and is composed of several services each one implemented as a docker image. To start the application run `docker-compose up`.

The docker images used for the YoungRes backend are 3: mongo, youngres/youngres_gameplay_api, and youngres/youngres_comsuption_api.

* **mongo (db)**: official image with the MongoDB service, will store the database.
* **youngres/youngres_gameplay_api (gameplay)**: custom image that has an OpenAPI based python flask server that serves the gameplay API.
* **youngres/youngres_comsuption_api (consumption)**: custom image that has an OpenAPI based python flask server that serves the data consumption API.

## Custom dockers

Both custom dockers, *youngres/youngres_gameplay_api* and *youngres/youngres_comsuption_api*, are stored in this repository in the folders *comsuption_api* and *gameplay_api*. Both projects are based on OpenAPI technology and have a similar structure. Documentation for each service is available in their respective folders.

## Branches and working workflow

The project is composed of several branches. Mainly three:

* **master**: contains lastest stable version.
* **development**: contains work-in-process version of the project, the project should work although it could have bugs, missing functionalities... etc (only merges into master)
* **feature_x**: contains the work-in-process of an specific feature X, the project could not work in this branches, they could be tailored for the developer environment. (several feature branches can exists at the same time, only branches/merges from/with development)

### Workflow

**To implement** a new feature branch the desired point of the development branch and start working on it. Feel free to change the configuration to meet your local programming environment, and make as many local docker files as desired.

Once the **implementation of a feature is finished**, remove any changes made to adapt the project to your local machine, upload the docker images necessary to DockerHub tagged with the last commit id of the feature branch, change the docker-compose to pull these new images, and merge the feature branch into the development branch.

Once the **development branch reaches a stable point**, upload the docker images indicated in the docker-compose file to DockerHub tagged as 'latest', remove the version of the images from the docker-compose file, commit the changes and merge the development branch into the master branch.
