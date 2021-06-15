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

![architecture](https://github.com/Dilshika/pet-project/blob/master/images/architecture.png)

As you can see in the diagram the route to the server is going through an API gateway. Then API gateway referral to the suitable service and routes to it. So this API gateway restricts access to the backend.

## Why API Gateway?
In theoretically, a client can make requests to a microservice directly. Basically, what the API service does is accepts remote requests and return a response. But if you have large-scaled APIs this is not simple as it seems to be.
The direct access of microservices means being overuse and being abused. And the backend becomes more exposed. This is not a good manner to implement a system. So, we need to find a suitable solution to this.
The best solution I came up with is to implement an API gateway. API gateway sits between client and backend service as a management tool. It also works as a reverse proxy to the system, that accepts all API calls. And It's a way to decouple client and backend services. That means using API gateway we can set backend restrictions to the client.

## Microservices
In the Sample Implementation phase, we will discuss more microservices. Here simply described the purpose of each service. First, we see how a microservice will work.

![microservice](https://github.com/Dilshika/pet-project/blob/master/images/microservice.png)

As shown in the diagram a microservice has a REST API and its own database. And microservices communicate with each other. For example, each microservice has to communicate with an authentication service to know if the user is authenticated. In this system, there are fourteen services and four services implemented. In the future, I hope to complete the whole system.

### Auth Service
This is an authentication and authorization service for the Auction application.
### Artwork Service
Artwork service is for creating, reading, and deleting artworks.
### Bidding Service
In this service, auction events are created and users can bid for the active auctions.
### Address Service
User's addresses are stored here. Users can create, update, read and delete the address and can have more than one address.
### Photos Service
Artwork-related photos are stored in this service. Users can read and save images. Admin can delete images.
### Message Service
In this service, users can send messages to another user. Users can create, read, delete messages.
### Review Service
In this service customer reviews are created, read, update and delete.
### Comment Service
In this service, users can create, read, update and delete comments for particular artwork.
### Add to Bucket Service
Users can add artworks to the bucket. The operations happen regarding add-to-buckets handle here.
### Payment Service
All the operations that regarding payments handle in this service.
### Shipping Service
Shipping operations are handling by this Service.
### Suggestion Service
This service is to suggest items to the user. By using their past transactions, search list, and watchlist.
### Notification Service
Notification Service is used to send notifications to the users.
### Profile Service
This service is for handling operations regarding users' profiles.

## Use cases
To more clear about the system we will see the use cases given below. The registered user can act as both bidder and seller. But their actions become vary as the role they choose to play. The admin is the person who handles the system. So I hope to implement an admin portal to do the specific tasks that the admin can do. Therefore it's not visible to the web page and cannot access from there.

![usecase-bidder](https://github.com/Dilshika/pet-project/blob/master/images/usecase-bidder.jpeg)

![usecase-seller](https://github.com/Dilshika/pet-project/blob/master/images/usecase-seller.png)

![usecase-admin](https://github.com/Dilshika/pet-project/blob/master/images/usecase-admin.jpeg)

# Sample Implementation
## Auth Service
In this phase, I am going to describe the auth service I have built. Authentication is verifying who the person is user says. This involves checking the username, email, password, or token that was signed. I have implemented token-based authentication to authenticate users.
Let's see step by step how this service is implemented. Before that, we clear out what is token-based authentication why it is used.
JSON Web Token-Based Authentication
The token is a piece of data that is meaningless or cannot use on its own. But it can use to secure the application. JSON Web Token(JWT) is a base64 encoded token that consists of header, payload, and signature. Token-based authentication works by ensuring that every request to a server with a signed token, which the server verifies for authenticity and only responds to the request.
Tokens use for authentication because they are stateless and contain all the information that needs for authentication. They can be generated from anywhere, as it is decoupled from token verification. Within the token, we can also specify user roles and permissions, and resources that users can access. JSON web tokens are signed using a secret(HMAC algorithm) or using a private/public key pair (RSA algorithm).
So if someone able to decode the token still the signature is different authentication fails. So it is secured to use.
Now Let's see how this auth service works. The following diagram shows how the auction service works.

![auth](https://github.com/Dilshika/pet-project/blob/master/images/authenticatio.png)

As you can see, when a user registers, the HTTP request sends to the API gateway. Then gateway chooses the auth service and sends that request. After auth service checks if there is any other user who exists with the same credentials. If not create a new user and sends the response back to the frontend. 
When the user login to the system-auth service generates an access token and sends it to the frontend. Then, that access token is used to access the system.

Let's see how to generate a JSON web token and validate it. First, install the required file @nestjs/jwt.

```
$ npm install --save @nestjs/jwt
```
Now we need to add JwtService to the auth module. Here we have given a secret to sign the jwt.
```
import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports:[
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'3600s'}
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  
})
export class AuthModule {}
```

Now we can generate real JWT. Now let's create an AuthService service class where we can implement our business logic. In the AuthService add the following codes.

```
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService,
        private userService:UserService){}

    //validate user
    async validateUser(email:string,password:string):Promise<User>{
        try{
            const user=await this.userService.getUserByEmail(email);
            if(compareSync(password,user?.password)){
                return user;
            }
            return null;
        }catch(error){
            Logger.log(error);
            throw error;
        }
   }


   //signin
   async login(users:User){
       const user=this.userService.getUserByEmail(users.email);
        if(!user){
            throw new BadRequestException('Invalid Credintials');
        }

        const payload={id:(await user).username};
        console.log(payload);

        return {
           username:(await user).username,
           accesssToken:this.jwtService.sign(payload)
       };
   }
        
   //validate token
   validateToken(jwt:string){
       return this.jwtService.verify(jwt);
   }

   
   

}
```

Here I have imported the JwtService from @nestjs/jwt. Then implement methods to validate user, login user, and validate the token.
In the validate user method check email and password to validate the user. Since the password encrypted using bcrypt use the compareSync method to compare the passwords.
In the login method first, get the user by email, and if the user exists then create a payload for the jwt using username. And use that payload to generate an access token. This access token is used to access the auction system.
The validate token method is used to validate the access token that sends from the client.
