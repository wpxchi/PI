const axios= require('axios')
const {Pokemon}= require('../db')

const getPokemonsId= async()=>{
    const endpoint=`https://pokeapi.co/api/v2/pokemon/${id}`
    const {data}= await axios(endpoint)
    return data
}


const getPokemonsIdDb = async()=>{
  const PokemonsId=await Pokemon.findByPk(id);
  return PokemonsId
}


const Allpokemons = async (id) => {
    const pokemonFromApi = await getPokemonsId(id);
    const pokemonFromDb = await getPokemonsIdDb(id);
    
    // Combinar la información de ambas fuentes de datos (API y Base de Datos)
    const combinedData = {
        ...(pokemonFromApi || {}), // Si pokemonFromApi es null o undefined, se asigna un objeto vacío
        ...(pokemonFromDb || {}), // Si pokemonFromDb es null o undefined, se asigna un objeto vacío
    };

    // Filtrar el personaje por ID
    const filteredPokemon = combinedData.id === id ? combinedData : null;
    
    return filteredPokemon;
};

module.exports = { Allpokemons };