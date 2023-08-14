const {Router}= require ('express')
const Rpokemons = Router();
const {getPokemonsHandler, getPokemonsIdHandler, postPokemonsHandler, }= require('../Handler/PokemonsHandler')


Rpokemons.get('/', getPokemonsHandler)
Rpokemons.get('/:id', getPokemonsIdHandler)
Rpokemons.post('/', postPokemonsHandler)

module.exports = Rpokemons;