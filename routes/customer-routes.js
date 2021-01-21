const express = require('express');
const {ListaPokemon, ListaPokemonView, GetPokemon} = require('../controllers/pokemonController');


const router = express.Router();

router.get('/', ListaPokemonView);
router.post('/', ListaPokemon);
router.get('/GetPokemon/:id', GetPokemon);
//router.post('/CreaPokemonView', CreaPokemonView);
//router.post('/CreaPokemon', CreaPokemon);
//router.get('/ActualizaPokemonView/:id', ActualizaPokemonView);
//router.post('/ActualizaPokemon', ActualizaPokemon);
//router.post('/EliminaPokemon/:id', EliminaPokemon);


module.exports = {
    routes: router
}