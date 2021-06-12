# goustitoServer

## Requirements:

This server uses MongoDB Atlas. Set up a cluster and a database, and save the database URI as environment variable `MONGO_DB_URI`.

It also uses environment variable `PORT` which is currently configured to 3001.

## Usage:
* Clone repository
* `npm install`
* `npm run dev` for development mode
* `npm start` for production mode

## Overview:

This is a backend server designed to handle logins/signups and recipe saving from Goustito.

I intend to use Bcrypt for password hashing.

I will use three routers:

* User router for signups
* Login router for logging in
* Recipe router for recipe saving.

Users will need to have a "Saved Posts" field as well as username and password hash.

