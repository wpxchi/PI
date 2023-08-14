const { Pokemon, Type } = require("../db");
const axios = require("axios")


const getPokemonsApi  = async () => {
    try {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");
    
        const pokeApi = await api.data.results; 
    
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
    
        const getAllPokemon = await Promise.all(dataPokemon);
        return getAllPokemon;
      } catch (error) {
        throw new Error(error.message);
      }
    };
    
;

const getPokemonsDb = async () => {
    const allPokemonsDb = await Pokemon.findAll({
      //busco en la tabla los modelos que necesito
      include: {
        model: Type,
        atributes: ["name"],
      },
    });
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

  const getAllPokemons = async (name) => {
    const pokemonsDb = await getPokemonsDb();
    const pokemonsApi = await getPokemonsApi();
    const allPokemon = pokemonsDb.concat(pokemonsApi);
    
    if (name) {
        const pokemonName = allPokemon.filter(
            (e) => e.name.toLowerCase()=== name.toLowerCase()
        );

        if (pokemonName.length > 0) {
            return pokemonName;
        } else {
            return {message:(`No se encontró ningún Pokémon llamado ${name}`)};
        }
    }

    return allPokemon;
};

const getPokemonsById = async (id) => {
    const all = await getAllPokemons();
    const byId = await all.filter((e) => String(e.id) === id);
    if (byId.length) {
      return byId;
    } else {
      throw new Error(`Pokemon no encontrado, id: ${id} incorrecto`);
    }
  };

module.exports={getAllPokemons, getPokemonsById}