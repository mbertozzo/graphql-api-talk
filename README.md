# graphql-api-talk
This repository hosts the code to support a talk I'm going to hold about the creation of a GraphQL API with Node.js, Express, MySQL, Sequelize, consumed by a client made with React.

The project is built on top of react-boilerplate.

## Getting started
To get a working local copy of the project clone this repo to your machine and install the dependencies with

```bash
$ npm install
```

Please note that in order for everything to work, you'll need MySQL up and running on your machine, or a MySQL server you can connect to.  
To specify the connection parameters, just rename the `config-template.json` file in the `/server/api/config` folder to `config.json` and change the required data. If you're unsure what to change, you should edit the `development` params.

Finally, run the project typing in your console.

```bash
$ npm start
```

This will create two tables (post and author) in the DB you specified in `config.json`.