import axios from 'axios'

export const ALL_POKEMONS= 'ALL_POKEMONS'
export const ALL_TYPES= 'ALL_TYPES'
export const POKEMON_NAME= 'POKEMON_NAME'
export const ORDER_NAME= 'ORDER_NAME'
export const ORDER_ATTACK= 'ORDER_ATTACK'
export const ORDER_TYPES= 'ORDER_TYPES'
export const ORDER_ORIGIN= 'ORDER_ORIGIN'
export const FAILURE='FAILURE'
export const POKEMON_DETAILS= 'POKEMON_DETAILS'
export const POKEMON_CARROUSEL= 'POKEMON_CARROUSEL'

export const allPokemons=()=>{
    return async function(dispatch){
        const res = await axios.get('http://localhost:3001/pokemons');
        dispatch({type: ALL_POKEMONS, payload: res.data})
    }
}

export const pokemonCarrousel=()=>{
    return async function(dispatch){
        const {data}= await axios.get("http://localhost:3001/pokemons/carrousel")
        dispatch({type: POKEMON_CARROUSEL, payload: data})
    }
}


export const allTypes=()=>{
return async function (dispatch){
    const res = await axios.get('http://localhost:3001/types');
    dispatch({type: ALL_TYPES, payload: res.data})
}
}

export const PokemonByName=(name)=>{
return async function (dispatch){
    try {
        const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    dispatch({type:POKEMON_NAME, payload:res.data})
    } catch (error) {
        dispatch({type: FAILURE, payload:`NO POKEMON WITH NAME ${name}` })
    }  
}
}

export const getPokemonsDetail=(id)=>{
    return async function(dispatch){
        const res = await axios(`http://localhost:3001/pokemons/${id}`)
        dispatch({type: POKEMON_DETAILS, payload:res.data})
    }
}


export const FailureHandler=(Err)=>{
    return ({type: FAILURE, payload:Err})
}

export const orderName=(order)=>{
    return {type: ORDER_NAME, payload:order}
}

export const orderAttack=(order)=>{
    return { type: ORDER_ATTACK, payload:order}
}

export const orderTypes=(order)=>{
    return {type: ORDER_TYPES, payload:order}
}

export const orderOrigin=(order)=>{
return {type: ORDER_ORIGIN, payload:order}
}


