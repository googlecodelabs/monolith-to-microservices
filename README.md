# Monolith to Microservices

## Introduction

### This project is used by the Google Cloud Platform team to demonstrate different services within Google Cloud. This project contains two versions of the same application, one architected as a monolith and the other as a set of microservices.

## 1) Monolith

### To run the monolith project use the following commands from the top level directory:

```
cd monolith
npm start
```

### You should see output similar to the following:

```
Monolith listening on port 8080!
```

### That's it! You now have a perfectly functioning monolith running on your machine!


## 2) Microservices

### To run the monolith project use the following commands from the top level directory:

```
cd microservices

cd frontend
npm start

cd ../orders
npm start

cd ../products
npm start
```

### You should see output similar to the following for each directory:

```
Frontend microservice listening on port 8090!
Products microservice listening on port 8092!
Orders microservice listening on port 8091!
```

### That's it! You now have a perfectly functioning monolith running on your machine!
