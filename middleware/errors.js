const winston = require('winston');
require('express-async-errors');

module.exports = (err, req, res, next) => {
    winston.error(err.message, err);
    //res.status(500).send('Error');
    
    console.error(err.message);
    process.on('uncaughtException',ex=>{
        console.error(ex.message);
        process.exit(1);
    });
    process.on('unhandledRejection',ex=>{
        console.error(ex.message);
        process.exit(1);

    });
    res.status(500).send(err.message);
}