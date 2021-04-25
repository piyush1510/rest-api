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
