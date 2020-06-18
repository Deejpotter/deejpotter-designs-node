const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  nodeEnv: process.env.nodeEnv,
  connectionString: process.env.connectionString,
  port: process.env.port
};