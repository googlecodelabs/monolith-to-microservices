# Monolith to Microservices

## Introduction

### This project is used by the Google Cloud Platform team to demonstrate different services within Google Cloud. This project contains two versions of the same application, one architected as a monolith and the other as a set of microservices.

## Monolith

#### To run the monolith project use the following commands from the top level directory:

```
cd monolith
npm install
npm start
```

#### You should see output similar to the following:

```
Monolith listening on port 8080!
```

#### That's it! You now have a perfectly functioning monolith running on your machine!

### Docker

#### To create a Docker image for the monolith, execute the following commands:

```
cd monolith
docker build -t monolith:1.0.0 .
```

#### To run the Docker image, execute the following commands:

```
docker run -p 8080:8080 monolith:1.0.0
```


## Microservices

### To run the microservices project use the following commands from the top level directory:

```
cd microservices
npm install
npm start
```

### You should see output similar to the following:

```
[0] Frontend microservice listening on port 8090!
[2] Orders microservice listening on port 8091!
[1] Products microservice listening on port 8092!
```

### That's it! You now have a perfectly functioning set of microservices running on your machine!
