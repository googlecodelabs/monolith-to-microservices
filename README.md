# Monolith to Microservices

## NOTE: This is not an officially supported Google product

## Introduction

### This project is used by the Google Cloud Platform team to demonstrate different services within Google Cloud. This project contains two versions of the same application, one architected as a monolith and the other as a set of microservices

## Setup

### **NOTE:** Make sure you have a newer version of NodeJS (16.13.0) or newer (in Cloud Shell you can run `nvm install --lts`)

```bash
git clone https://github.com/googlecodelabs/monolith-to-microservices
cd monolith-to-microservices
./setup.sh
```

## Monolith

### To run the monolith project use the following commands from the top level directory

```bash
cd monolith
npm start
```

You should see output similar to the following

```text
Monolith listening on port 8080!
```

#### That's it! You now have a perfectly functioning monolith running on your machine

### Docker - Monolith

#### To create a Docker image for the monolith, execute the following commands

```bash
cd monolith
docker build -t monolith:1.0.0 .
```

To run the Docker image, execute the following commands

```bash
docker run --rm -p 8080:8080 monolith:1.0.0
```

## Microservices

### To run the microservices project use the following commands from the top level directory

```bash
cd microservices
npm start
```

You should see output similar to the following

```text
[0] Frontend microservice listening on port 8080!
[2] Orders microservice listening on port 8081!
[1] Products microservice listening on port 8082!
```

### That's it! You now have a perfectly functioning set of microservices running on your machine

### Docker - Microservices

### To create a Docker image for the microservices, you will have to create a Docker image for each service. Execute the following commands for each folder under the microservices folder

```bash
cd microservices/src/frontend
docker build -t frontend:1.0.0 .

cd ../products
docker build -t products:1.0.0 .

cd ../orders
docker build -t orders:1.0.0 .
```

To run the Docker image, execute the following commands

```bash
docker run -d --rm -p 8080:8080 monolith:1.0.0
docker run -d --rm -p 8081:8081 orders:1.0.0
docker run -d --rm -p 8082:8082 products:1.0.0
```

#### To stop the containers, you will need to find the CONTAINER ID for each and stop them individually. See the steps below

```bash
docker ps -a

CONTAINER ID        IMAGE                        COMMAND                CREATED
4c01db0b339c        frontend:1.0.0               bash                   17 seconds ago
d7886598dbe2        orders:1.0.0                 bash                   17 seconds ago
d85756f57265        products:1.0.0               bash                   17 seconds ago

docker stop 4c01db0b339c
docker stop d7886598dbe2
docker stop d85756f57265
```

## React App

### The react-app folder contains a React application created from `create-react-app`. You can modify this fronted, but afterwards, you will need to build and move the static files to the monolith and microservices project. You can do this by running the standard create-react-app build command below

```bash
npm run build
```

#### This will run the build script to create the static files two times. The first will build with relative URLs and copy the static files to the monolith/public folder. The second run will build with the standard microservices URLs and copy the static files to the microservices/src/frontend/public folder
