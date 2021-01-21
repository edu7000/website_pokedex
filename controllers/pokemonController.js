var {Pokedex,pokedexSchema} = require('../models/pokemon');
const {Apiservice} = require('../proxy/Apiservice');


const ListaPokemonView =  async (req, res, next) => {
    try{
        var list =null;

    /*Apiservice.ListaPokemon(new Pokedex(),(response, err) =>{
        if (err) {
            throw err;
        } else {
            res.render('pokedex', {
                data: response,
                param:{name:""}
            });
        }
    });*/

    res.render('pokedex', {
        data: {},
        param:{name:""}
    });
    }catch(err){
        console.log(err);
        res.status(404).json({ auth: false, message: err.message });
    }
}

const ListaPokemon = async (req, res, next) => {
    try{
        var object=null;
        var Objeto=new Pokedex();
        if(req.body){
            if(req.body.name.trim()!=""){
                Objeto.name.english=validaCaracteres(req.body.name.trim());
            }
            if(req.body.type!=""){
                Objeto.type=req.body.type;
            }
         }
        
        Apiservice.ListaPokemon(Objeto,(response, err) =>{
            if (err) {
                throw err;
            } else {
                /*res.render('pokedex', {
                    data: response,
                    param:req.body
                });*/
                res.status(200).json({ data: response, param: req.body });
            }
        });

        }catch(err){
            console.log(err);
            res.status(404).json({ auth: false, message: err.message });
        }
}

const GetPokemon = async (req, res, next) => {
    try{
    const id=req.params.id;

Apiservice.GetPokemon(id,(response, err) =>{
        if (err) {
            throw err;
        } else {
          //  console.log(JSON.stringify(response));
            res.render('pokemon', {
                data: response
            });
        }
    });
    
    }catch(err){
        console.log(err);
        res.status(404).json({ auth: false, message: err.message });
    }
}

function validaCaracteres(str) { 
    return str 
    .replace(/&/g, '&amp;' ) 
    .replace(/</g, '&lt;' ) 
    .replace(/>/g, '&gt;' ) 
    .replace(/"/g, '&quot;') 
    .replace(/#/g, '&#35;' ) 
    .replace(/\\/g, '\\\\' ) 
    .replace(/\n/g, '\\n' ); 
}
module.exports = {
    ListaPokemonView,
    ListaPokemon,
    GetPokemon
}