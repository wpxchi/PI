import React, { useEffect, useState } from "react";
import style from './HomePage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allPokemons, allTypes } from "../../Redux/actions";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import NavBar from "../../Components/NavBar/NavBar";

const HomePage = () => {
  const pokemons = useSelector((state) => state.Pokemons);
  const name = useSelector((state) => state.PokemonName);
  const attack = useSelector((state) => state.OrderAttack);
  const orderName = useSelector((state) => state.OrderName);
  const orderOrigin = useSelector((state) => state.OrderOrigin);
  const orderTypes = useSelector((state) => state.OrderTypes);
  const [currentData, setCurrentData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPokemons());
    dispatch(allTypes());
  }, [dispatch]);

  useEffect(() => {
    setCurrentData(pokemons);
  }, [pokemons]);

  useEffect(() => {
    setCurrentData(name);
  }, [name]);

  useEffect(() => {
    setCurrentData(attack);
  }, [attack]);

  useEffect(() => {
    setCurrentData(orderName);
  }, [orderName]);

  useEffect(() => {
    setCurrentData(orderOrigin);
  }, [orderOrigin]);

  useEffect(() => {
    setCurrentData(orderTypes);
  }, [orderTypes]);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const cardsToShow = currentData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Math.ceil(currentData.length / cardsPerPage);

  const renderPageNumbers = Array.from({ length: pageNumbers }, (_, index) => (
    <button key={index} onClick={() => paginate(index + 1)}>
      {index + 1}
    </button>
  ));

  return (
    <div className={style.HomePage}>
      <div>
        <Link to="/">
          <button className={style.botonLeave}>LEAVE</button>
        </Link>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon Title"
            className={style.ImagenTitle}
          />
        </div>
        <Link to="/Forms">
          <button className={style.BotonCrear}>CREATE POKEMON</button>
        </Link>
      </div>
      <NavBar />
      <CardsContainer currentData={cardsToShow} />
      <div className={style.Pagination}>
        {renderPageNumbers}
      </div>
    </div>
  );
};

export default HomePage;