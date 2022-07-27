# YoungRes Backend App

Backend application on the YoungRes project.

## Getting started

This is a docker project and is composed of several services each one implemented as a docker image, to play the game:

1. Create a `.env` file with your credentials
`` 
MONGO_USER="change_username"
MONGO_PASSWORD="change_password"
SECRET_KEY="change_secret"
``
2. Start the backend with run `docker-compose up -d`
3. Once the backend has started, run `YoungRes_english/Game.exe` to start playing the game. 

## Credentials

The youngRes video game store the decision taken by the players in a data base. When the game starts it asks for an user. 
By default the database contains an user named `student`. In addition, to use the visualization application different
credentials are required. By default and `admin` user is created with a password `youngres`.

**WARNINNG Change these credentials when deploying the aplication.**

## List of Chapters

To play a particular chapter the next codes are available:

* **Chapter** **Code**
* Chapter 1 : 1593
* Chapter 2 : 2377
* Chapter 3 : 3009
* Chapter 4 : 4474
* Chapter 5 : 5578
* Chapter 6 : 6968
* Chapter 7 : 7511
* Chapter 8 : 8744
* Chapter 9 : 9322
* Chapter 10 : 1228
* Chapter 11 : 6802
* Chapter 12 : 1477
* Chapter 13 : 3858
* Chapter 14 : 9663
* Chapter 15 : 3558
* Chapter 16 : 5576
* Chapter 17 : 8851
* Chapter 18 : 2580
* Chapter 19 : 7549
* Chapter 20 : 2656
* Chapter 21 : 4799
* Chapter 22 : 3885

## Backend components

The docker backend is composed of 4 services:

* **mongo (db)**: official image with the MongoDB service, will store the database.
* **youngres/youngres_gameplay_api (gameplay)**: custom image that has an OpenAPI based python flask server that serves the gameplay API.
* **youngres/youngres_comsuption_api (consumption)**: custom image that has an OpenAPI based python flask server that serves the data consumption API.
* **youngres/visualization**: custom image that has the visualization app


