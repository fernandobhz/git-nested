require("dotenv/config");

const config = require('config');

const dbConfig = config.get('integrators');
console.log(dbConfig);
