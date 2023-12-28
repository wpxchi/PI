
const axios = require("axios");
const getPokemonsApi = async () => {
    try {
      // Realiza una solicitud GET a la API de Pokémon
      const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=3");
  
      // Obtiene la lista de resultados de la API
      const pokeApi = await api.data.results;
      
      // Mapea cada resultado para obtener detalles específicos de cada Pokémon
      const dataPokemon = pokeApi.map(async (pokemon) => {
        const info = await axios.get(pokemon.url);
        const i = info.data;
        return {
          id: i.id,
          name: i.name,
          types: i.types.map((e) => e.type.name),
          image: i.sprites.other.home.front_default,
          hp: i.stats[0].base_stat,
          attack: i.stats[1].base_stat,
          defense: i.stats[2].base_stat,
          speed: i.stats[5].base_stat,
          height: i.height,
          weight: i.weight,
        };
      });
  
      // Espera a que todas las solicitudes de detalles de Pokémon se completen
      const firstThreePokemon = await Promise.all(dataPokemon);
      
      // Devuelve solo los tres primeros Pokémon
      return firstThreePokemon;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports={getPokemonsApi}