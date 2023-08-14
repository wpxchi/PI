const {getAllPokemons, getPokemonsById} = require ('../Controllers.js/getPokemons')
const { createPokemon } = require('../Controllers.js/postPokemon')
const getPokemonsHandler=async(req, res) =>{
    const {name} = req.query
   try {
    const Pokemons = await getAllPokemons(name)
    res.status(200).send(Pokemons);
   } catch (error) {
    res.status(400).send({error: error.message})
   }
}

const getPokemonsIdHandler=async (req, res) =>{
    const {id}=req.params
    try {
        const PokemonsId= await getPokemonsById(id)
        res.status(200).send(PokemonsId);
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
const postPokemonsHandler = async (req, res) => {
    const {
      name,
      image,
      hp,
      attack,
      defense,
      speed = null,
      height = null,
      weight = null,
      createdInDb = true, //no es necesario 
      types,
    } = req.body;
    try {
      const pokemon = await createPokemon(
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInDb,
        types
      );
      res.status(200).json( pokemon );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


module.exports={getPokemonsHandler, getPokemonsIdHandler, postPokemonsHandler}