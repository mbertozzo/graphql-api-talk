# graphql-api-talk
This repository hosts the code to support a talk I gave about the creation of a GraphQL API with Node.js, Express, MySQL, Sequelize, consumed by a client made with React.

The project is built on top of react-boilerplate.

## Getting started
To get a working local copy of the project clone this repo to your machine:

```bash
git clone https://github.com/mbertozzo/graphql-api-talk.git your-folder
```

Then, move to the folder you cloned the project into and install the dependencies with:

```bash
$ npm install
```

Please note that in order for everything to work, you'll need MySQL up and running on your machine, or a MySQL server you can connect to.

### Configuring the DB connection
To specify the connection parameters for the database, just rename the `config-template.json` file in the `/server/api/config` folder to `config.json` and change the required data. If you're unsure what to change, you should edit the `development` params.

##  Launch project on localhost
To fire up Node just type:

```bash
$ npm start
```

This will create two tables (post and author) in the DB you specified in `config.json` and populate them with some fake data.  

Just go to `http://localhost:3000` with your browser to view the React app consuming the API.

To reach the GraphQL playground and test raw queries and mutation, point your browser to `http://localhost:3000/graphql`.