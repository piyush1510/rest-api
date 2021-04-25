# nodejs rest api
this is simple rest api using express mongodb(mongoose) auth will be added in the future
## setup
installing all dependencies
```sh
npm install
```
if this fails it is an internal problem of your nodejs distribution
## setting up .env folder
create a file as .env and put inside following each in a new line:
```sh
PORT = <port>
```
'port' is your port on which you want to run the server for example use 5000 as default
```sh
MONGO_URL=<mongo url>
```
'mongo url' is the url of your database for default use:  
mongodb://localhost/restapi  
this url will work for your local machine use mongo cluster url for deployment
## routes
```sh
localhost:<port>/
```
is a get request which responds with all posts
```sh
localhost:<port>/getone/:id
```
is a get request which responds with one post if id matches
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

