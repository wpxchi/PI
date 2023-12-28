import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { pokemonCarrousel } from '../../Redux/actions';
import style from './Landing.module.css';
import Footer from '../../Components/Footer/Footer';

const LandingPage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.Pokemoncarrousel);
  const [index, setIndex] = useState(0);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showScrollBottomButton, setShowScrollBottomButton] = useState(false);

  useEffect(() => {
    dispatch(pokemonCarrousel());
    // Agrega un listener para controlar la visibilidad de los botones
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isAtTop = scrollTop === 0;
    const isAtBottom =
      window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 2;

    setShowScrollTopButton(!isAtTop);
    setShowScrollBottomButton(!isAtBottom);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={style.fondoLanding}>
      <div>
      <div className={style.titleContainer} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt='PokemonTitle'/>
        </div>
      </div>
      <div className={style.carouselContainer}>
        {pokemons.length > 0 && (
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            style={{ width: '15%', margin: 'auto', height: '35px' }}
          >
            {pokemons.map((pokemon) => (
              <Carousel.Item key={pokemon.id}>
                <img
                  className="d-block w-100"
                  src={pokemon.image}
                  alt={pokemon.name}
                  style={{ maxWidth: '100%', objectFit: '', height: '300px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        <div className={style.scrollButtons}>
          {showScrollTopButton && (
            <button onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
            </button>
          )}
          {showScrollBottomButton && (
            <button onClick={scrollToBottom}>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
</svg>
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
