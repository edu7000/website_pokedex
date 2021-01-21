const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL,API_PORT, API_HOST,API_KEY} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');
assert(API_PORT, 'API_PORT is required');
assert(API_HOST, 'API_HOST is required');
assert(API_KEY, 'API_KEY is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    ApiPort:API_PORT,
    ApiHost:API_HOST,
    ApiKey:API_KEY
}