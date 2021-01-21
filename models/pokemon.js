const mongoose = require('mongoose');
//const Joi = require('joi');
const pokedexSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name:
        {
            english:{type:String, required: true} ,
            japanese: {type:String} ,
            chinese: {type:String} ,
            french: {type:String} 
        }, 
    type: {
        type: Array,
        required: true
    },
    base: {
            HP: {type:Number},
            Attack: {type:Number},
            Defense: {type:Number},
            SpAttack: {type:Number},
            SpDefense: {type:Number},
            Speed: {type:Number}
        },
});

class BaseClass{
    constructor(){
        this.HP=0;
        this.Attack=0;
        this.Defense=0;
        this.SpAttack=0;
        this.SpDefense=0;
        this.Speed=0;
    }
}
class PokemonClass{
    constructor(){
        this.id=0;
        this.idimage="";
        this.Dscrip="";
        this.idgrpevol=0;
    }
}
 class PokedexClass{
    constructor(){
        this.id=0;
        this.name={
            english:"" ,
            japanese: "" ,
            chinese: "" ,
            french: "" 
        };
        this.type=[];
        this.base={
            HP:0,
            Attack:0,
            Defense:0,
            SpAttack:0,
            SpDefense:0,
            Speed:0
        };
        this.pokemon=new PokemonClass();
    }
}
const Pokedex= PokedexClass;
module.exports = {
    Pokedex,
    pokedexSchema
}