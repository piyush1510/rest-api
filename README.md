# nodejs rest api

this is simple rest api using express mongodb(mongoose) auth will be added in the future

## setup

installing all dependencies

```sh
npm install
```

if this fails it is an internal problem of your nodejs distribution

## setting up .env file

create a file as .env and put inside following each in a new line:

```sh
PORT = <port>
```

'port' is your port on which you want to run the server for example use 5000 as default

```sh
MONGO_URL=<mongo url>
DB_NAME=<name>
```

'mongo url' is the url of your mongo server  
for default use:  
mongodb://localhost:27017  
this url will work for your local machine use mongo cluster url for deployment  
'db name' is the data base name and the default to be used is restapi

```sh
SECRET_KEY=<secret>
```

secret is a random string

## CLI commands

1. npm test:- start dev server using nodemon
2. npm start:- start the server with node
3. npm run add-admin:- run the create admin script from the script folder

## routes

```sh
localhost:<port>/
```

is a get request which responds with all posts

```sh
localhost:<port>/getone/:id
```

is a get request which responds with one post if id matches

## admin routes

```sh
localhost:<port>/admin/login
```

this route is a post method route has the body :

```sh
{
    "email":"<email>",
    "password":"<password>"
}
```

it sends a token which is supposed to be attached to authorization header of the form "bearer token" format

```sh
localhost:<port>/admin/create
```

is a post request which is responsible for creating a post  
its body should be:

```sh
{
    "title":"<example title>",
    "content":"<example content>",
}
```

```sh
localhost:<port>/admin/delete
```

this route is a delete method which deletes using the id

```sh
localhost:<port>/admin/update/
```

this route is a patch method which updates using the id  
the body of the request should be:

```sh
{
    "title":"<example updated title>",
    "content":"<example updated content>",
}
```

## scripts

1. add admin script  :-  npm run add-admin to run the script