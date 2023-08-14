const {Pokemon}= require('../db')
const { Op } = require('sequelize');

const getPokemonsDb= async(name)=>{
    if(name){
        const allPokemons = await Pokemon.findAll({
            where: {
                name: {
                  [Op.iLike]: `%${name}%`
                }
              }
        });
        return allPokemons  
    }

const allPokemons = await Pokemon.findAll()
return allPokemons
}

module.exports = {getPokemonsDb}