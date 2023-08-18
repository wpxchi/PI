const { Pokemon, Type } = require("../db");
const axios = require("axios");

// Función para obtener datos de Pokémon desde la API
const getPokemonsApi = async () => {
  try {
    // Realiza una solicitud GET a la API de Pokémon
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");

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
    const getAllPokemon = await Promise.all(dataPokemon);
    return getAllPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Función para obtener datos de Pokémon desde la base de datos
const getPokemonsDb = async () => {
  const allPokemonsDb = await Pokemon.findAll({
    // Busca en la tabla los modelos que necesitas, incluyendo los tipos
    include: {
      model: Type,
      attributes: ["name"], // Obtén solo el nombre del tipo
    },
  });
  
  // Mapea los datos de la base de datos a un formato deseado
  const mapPoke = allPokemonsDb.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      types: e.Types.map((e) => e.name),
      hp: e.hp,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
      createdInDb: e.createdInDb,
    };
  });

  return mapPoke;
};

// Función para obtener todos los Pokémon (desde API y base de datos)
const getAllPokemons = async (name) => {
  const pokemonsDb = await getPokemonsDb();
  const pokemonsApi = await getPokemonsApi();
  
  // Combina los resultados de la API y la base de datos
  const allPokemon = pokemonsDb.concat(pokemonsApi);
  
  if (name) {
    // Filtra los Pokémon por nombre si se proporciona un nombre
    const pokemonName = allPokemon.filter(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );

    if (pokemonName.length > 0) {
      return pokemonName;
    } else {
      throw new Error (`No se encontró ningún Pokémon llamado ${name}` );
    }
  }

  return allPokemon;
};

// Función para obtener Pokémon por su ID
const getPokemonsById = async (id) => {
  const all = await getAllPokemons();
  
  // Filtra los Pokémon por ID
  const byId = await all.filter((e) => String(e.id) === id);
  
  if (byId.length) {
    return byId;
  } else {
    throw new Error(`Pokemon no encontrado, id: ${id} incorrecto`);
  }
};

// Exporta las funciones para usarlas en otros módulos
module.exports = { getAllPokemons, getPokemonsById };