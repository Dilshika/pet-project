# Auction Software with Angular, NestJs, and Mongoose

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Overview
This auction software was built as a pet project to enhance and maintain my skills. I always wanted to try and do a project like eBay and, this is the main reason behind this project. Present-day online-based auction software becomes extremely popular as a component within the electronic marketplace. The rationale behind it's the rapidly growing internet environment and online shopping growing fast. So, building auction software is a good selection because of that. This auction software is particular to artworks where artists and users can meet one another for his/her requirements.

## Problem Domain
There are always hobbyists who desire to buy artworks. And some artisans need to sell their artwork at a satisfactory worth. Both parties can be satisfied if there is a platform to serve their requirements.
If that platform is a store or auctioning event, one party may not be satisfied. In such cases, if we have a web platform it might be easy to pick what they need. It would resolve the problems like traveling distances, finding the foremost suitable thing they would like.

## Solution
As mention above, I have brought up a solution to build an auction software for selling and buying arts. On this website provide to users,

- Users can register to the website.
- Users can put their artworks to auction or direct selling type.
- Users can search for arts.
- Users can communicate with each other.
- Users can add reviews and comments to individual items.
- Users can gain fame through customer reviews.
- Users can bid on their favorite artwork.

## Architecture Design
This project has a microservices-based architecture. The technology stack used for this project is Mongoose, NestJs, Angular.

## Why microservice architecture?
I choose this project to be microservice architecture because it allows the creation of separate components of an application by a combination of small services. Each service is built-in individually and deployed separately. So, they run their process individually and communicate with each other with the help of APIs.
Microservices are easier to test, understand and maintain. It is an excellent solution for building large-scale products to improve workflow and productivity.
Microservices are isolated. If one of the services failed, we can continue to run the application using another service. Microservices are easy to understand compared to an entire monolithic application.
The services can build using different languages, frameworks, or libraries without affecting the communication between microservices.
 We know that eBay, Netflix, and most commercial applications switch from monolithic architecture to microservice architecture. In my case, in the future, I need to add additional features to the application. Therefore, adding features to an existing application without affecting microservices is the best choice. I can also change the technologies and, versioning becomes easy with this architecture.

## Why Angular as frontend?
I choose angular to be my front end. The reasons behind this choice of using angular describe in this phase. We know that angular use to build interactive and dynamic single-page web applications (SPAs).
If you choose angular, you don't need to rely on third-party libraries to build dynamic applications. Angular has Google's long-term support. Therefore, it has a large community. If you face problems with codes, you can find solutions easily because of that.
The angular applications are build using TypeScript, which ensures higher security of types. It helps to find and eliminate errors early.
In Angular, the components decoupled from each other. It helps for better implementation and makes unit testing easier. And Angular has powerful libraries like Rxjs, ngrx.

## Why NestJs as backend?
I have chosen NestJs to be my backend framework. We all know that NodeJs comes with countless libraries. So, without proper and handful experience, hard to figure with NodeJs. (Because I didn't have a prior experience with NodeJs). Since I have chosen Angular to be my frontend and learned that TypeScript has great security with types this becomes the most suitable framework for me to work with server-side.
NestJs is currently a fast-growing NodeJS framework in TypeScript. And it provides features similar to Angular. And it has detailed and maintained documentation that helps to use and master it.

## Why Mongoose?
Mongoose is a Nodejs based Object Data Modelling (ODM) library for MongoDB. Mongoose offers hooks, model validation, and many other features that help to work with MongoDB. The main reason to use mongoose with MongoDB is Schemas. Apart from that mongoose provides optional pre and post save operations for data models.

## System Architecture
The system architecture I have designed is as follows. I think it's the most suitable architecture design for this system.
![architecture](images\architecture.png)
As you can see in the diagram the route to the server is going through an API gateway. Then API gateway referral to the suitable service and routes to it. So this API gateway restricts access to the backend.




