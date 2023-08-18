import React from "react";
import Cards from "../Cards/Cards";
import style from './CardsContainer.module.css';
import { FailureHandler } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const CardsContainer = ({currentData, Error}) => {
const dispatch= useDispatch()
const FailureChange=(e)=>{
  dispatch(FailureHandler(e.target.value))
}
 if(Error){
  return (
   
      <div className={style.ErrorContent}>
        <p className={style.ErrorText}>{Error}</p>
        <img
          src="https://media.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif"
          alt="Error"
          className={style.ErrorImage}
        />
        <button value="Err" onClick={FailureChange} className={style.ButtonError}>
        ← BACK
        </button>
      </div>
   
  );
  }
  
  else if(currentData.length>0){
    return (
      <div className={style.CardsContainer}>
        {currentData &&
          currentData.map((p) => (
            <Cards
              key={p.id}
              name={p.name}
              image={p.image}
              types={p.types}
              id={p.id}
            />
          ))}
      </div>
    );}

   

    else {
      return (
        <div className={style.loading}>
          <p>Loading...</p>
          <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Loading"
          className={style.loadingImage}
      />
        </div>
      );
    }
  }
export default CardsContainer;