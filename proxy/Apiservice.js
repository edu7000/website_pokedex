const config = require('../startup/config');
var http = require('http');

class ApiserviceClass{
    constructor(){
        this.options={};
        this.IniciarApi();
    }

IniciarApi(){
    this.options = {
        host: config.ApiHost,
        port: config.ApiPort,
        method: "GET",
        path: "/GetPokemon",//I don't know for some reason i have to use full url as a path
        //encoding: null,
        headers: { // speciyfy the headers
            "Authorization": `Bearer ${config.ApiKey}`,
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8",
        },
        auth: "username" + ':' + "password",
        body: {},
    };

}

    GetPokemon(_id,next) {
        try{

        this.options.method="GET";
        this.options.path="/GetPokemon";
        this.options.path+="/"+_id;
        var req = http.request(this.options, function(res) {
            var contentType = res.headers['content-type'];
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            }).on('end', function () {
                var response = null;
                // Nos aseguramos de que sea tipo JSON antes de convertirlo.
                if (contentType.indexOf('application/json') != -1) {
                    response = JSON.parse(data);
                }
                // Invocamos el next con los datos de respuesta
                next(response, null);
            }).on('error', function(err) {
                console.error('Error al procesar el mensaje: ' + err);
                throw(err);
            }).on('uncaughtException', function (err) {
                console.error(err);
                throw(err);
            });
        }).on('error', function (err) {
            // Si hay errores los sacamos por consola y le pasamos los errores a next.
            console.error('HTTP request failed: ' + err);
            next(null, err);
            throw(err);
            
        });

        req.end()
    }catch(err){
        throw(err);
       
    }finally{

        
    }
 
    }

    ListaPokemon(object,next) {
        try{
       
            //console.log(JSON.stringify(object));
            this.options.method="POST";
            this.options.path="/ListaPokemon";
            var req = http.request(this.options, function(res) {
               
                var contentType = res.headers['content-type'];
                var data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                }).on('end', function () {
                    var response = null;
                    // Nos aseguramos de que sea tipo JSON antes de convertirlo.
                    if (contentType.indexOf('application/json') != -1) {
                        response = JSON.parse(data);
                    }
                    // Invocamos el next con los datos de respuesta
                    next(response, null);
                }).on('error', function(err) {
                    console.error('Error al procesar el mensaje: ' + err);
                    throw(err);
                }).on('uncaughtException', function (err) {
                    console.error(err);
                    throw(err);
                });
            }).on('error', function (err) {
                // Si hay errores los sacamos por consola y le pasamos los errores a next.
                console.error('HTTP request failed: ' + err);
                
                next(null, err);
                throw(err);
                
            });
           
            req.write(JSON.stringify(object));
            req.end();

    }catch(err){
        throw(err);
       
    }finally{

        
    }
 
    }

}

var Apiservice=new ApiserviceClass();
module.exports = {
    Apiservice
}


