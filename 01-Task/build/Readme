Pet shop database schema being built using laravel migration (the repo is not accessable to me), I will be using knex (used as an SQL query builder in both Node.JS and the browser)

## Install Packages 
You'll have to install knex and mysql driver (Assuming the laravel is connected to the mysql database) using npm or yarn (I would Highly recommed using npm becuase This is what I have used in my case)
```
npm install
```
`note: in case you're using another database engine, please make sure to install that driver checkout the docs here https://knexjs.org/guide/`

## Update database access Configuration 
`.env.example` contain sample for the env variables required to connect the database, rename the file name to `.env` and update content

## run knex migrations

```
knex migrate:latest
```


## use docker for easy deployment

run from the host machine
```
docker compose up -d
```
 again from host machine

 ```
 knex migrate:latest
 ```


 access phpmyadmin to see results 
 ```
 http://localhost:8080
 ```
