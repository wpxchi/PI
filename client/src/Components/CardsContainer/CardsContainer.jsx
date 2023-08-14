import React from "react";
import Cards from "../Cards/Cards";
import style from './CardsContainer.module.css';

const CardsContainer = ({currentData}) => {
  if(currentData.length>0){
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