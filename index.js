const Server = require("./models/server");
require('dotenv').config();

const server = new Server();  


server.execute();

//module.exports.handler = server.execute();
