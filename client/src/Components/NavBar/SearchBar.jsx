import {React, useState}from "react";
import { useDispatch } from "react-redux";
import { PokemonByName, allPokemons} from "../../Redux/actions";
import style from './SearchBar.module.css'

const SearchBar=()=>{
  const dispatch= useDispatch();
  const [searchValue, setSearchValue]=useState('')

  const HandleChange=(event)=>{
    setSearchValue(event.target.value);
  }
  const HandleSearch=()=>{
    dispatch(PokemonByName(searchValue))
    setSearchValue('')}

     const HandleQuit=()=>{
            dispatch(allPokemons())
           }

    return(
        <div className={style.searchBar}>
      <input type="search" onChange={HandleChange} value={searchValue}  className={style.searchInput} /> 
      <button onClick={HandleSearch} className={style.searchButton}>Search</button>
      <button onClick={HandleQuit} className={style.quitButton}>Quit</button>
    </div>
    )
}

export default SearchBar