const { Pokemon, Type } = require('../db');

const createPokemon = async (
    name,
    image,
    hp,
    attack,
    defense,
    speed = null,
    height = null,
    weight = null,
    createdInDb,
    types
  ) => {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
      },
    });
    if (!created) throw new Error("Este pokemon ya existe en la DB");
    const typesDb = await Type.findAll({ where: { name: types } });
  
    pokemon.addTypes(typesDb);
  
    return pokemon;
  };
  
module.exports = { createPokemon };