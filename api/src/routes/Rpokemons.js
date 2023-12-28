const {Router}= require ('express')
const Rpokemons = Router();
const {getPokemonsHandler, getPokemonsIdHandler, postPokemonsHandler, getPokemonsCarrousel}= require('../Handler/PokemonsHandler')


Rpokemons.get('/', getPokemonsHandler)
Rpokemons.get('/carrousel', getPokemonsCarrousel)
Rpokemons.get('/:id', getPokemonsIdHandler)
Rpokemons.post('/', postPokemonsHandler)

module.exports = Rpokemons;