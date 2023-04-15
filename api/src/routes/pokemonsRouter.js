const { Router } = require('express');
const {getPokemonsHandler, getPokemonsIdHandler, 
    createPokemonsHandler} = require('../handlers/pokemonsHandler')

const pokemonsRouter=Router();

pokemonsRouter.get('/', getPokemonsHandler);
pokemonsRouter.get('/:id', getPokemonsIdHandler);
pokemonsRouter.post('/', createPokemonsHandler);

module.exports=pokemonsRouter;