# goustitoServer

The backend for the [Goustito recipe bank](https://github.com/jameshallam93/goustito)

## Requirements:

* A mongo db cluster with the URI saved to environment variable GOUSTITO_SERVER_MONGO_DB_URI
* GOUSTITO_SERVER_PORT environment variable (currently configured to 3001)
* GOUSTITO_SERVER_TOKEN_SECRET (any string, currently configured to a random MD5 hash)
* GOUSTITO_SERVER_FRONTEND_API_ID (sign up for the recipe API at [EDAMAM](https://developer.edamam.com/)
* GOUSTITO_SERVER_FRONTEND_EDAMAM_API_KEY (as above)


## Usage:
* Follow instructions to clone and start the frontend [here](https://github.com/jameshallam93/goustito/blob/main/README.md)
* Clone repository
* `npm install`
* `npm run dev` for development mode
* `npm start` for production mode

## Overview:

This is a backend server designed to handle logins/signups, sending requests to the recipe API, and recipe saving.

Password hashing is done using bcrypt

I will use three express routers:

* User router for signups
* Login router for logging in
* Recipe router for recipe saving.




