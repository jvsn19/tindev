# Tindev - Backend

Backend for Tindev Application

## Architecture

In this project we are using the default MVC architecture, where Model is the model for each data unity (a **developer**, for example; Controller is the component responsible for dealing with the models and any logic (for example, we store a new dev in the controller by receiving the github id, performir a request on github api and processing this request).
Also there is good practices in software engineering about the methos inside the controller:

1. INDEX: build a list of resources
2. SHOW: return one resource
3. STORE: create a resource
4. UPDATE: update a resorce
5. DELETE: delete a resource

### Learn More

- [Rest Status Codes](https://restfulapi.net/http-status-codes/)

## Database

In this project we are using [Mongodb Atlas](https://www.mongodb.com/cloud/atlas), a free cloud mongodb database (with 500 mb storage) and [Mongodb Compass Community](https://www.mongodb.com/download-center/compass) to test our database.
For database abstraction purpose, we use [mongoose](https://mongoosejs.com/).

### Learn More

- [SQL x NoSQL](https://towardsdatascience.com/how-to-choose-the-right-database-afcf95541741)
- [Queries with MongoDB](https://docs.mongodb.com/manual/reference/operator/query/)

## Problems

- If you have problems with ES6 import notation, read about [using Babel](https://hackernoon.com/using-babel-7-with-node-7e401bc28b04)
