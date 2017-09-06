var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
// i.e.: http://localhost:3000/3Ys
config.webhost = 'http://localhost:3000/';

// your MongoDB host and database name
config.db.host = 'mongodb://xander-daine:1234@ds157833.mlab.com:57833/short_microservice';
config.db.name = 'short_microservice';

module.exports = config;