import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Menu.css';
import { Link } from 'react-router-dom';
import ImagenCara from '../../Utils/CaraFoto.jpeg';

const Menu = () => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const Token = localStorage.getItem('Token');
    Token?.length ? setToken(true) : setToken(false);
  });

  const logOut = () => {
    localStorage.clear();
    setToken(false);
  };

  return (
    <>
       <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: 'grey',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pokemon Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu-item">
            {token ? (
              <div>
                <Link to={'/'}>
                  <button className="menu-button" onClick={logOut}>Log out</button>
                </Link>
                <p>See you soon!</p>
              </div>
            ) : (
              <div>
                <Link to={'/Login'}>
                  <button className="menu-button">Login</button>
                </Link>
                <p>Sign in</p>
              </div>
            )}
          </div>
          <Link to={'/HomePage'}>
            <button className="menu-button">Home</button>
          </Link>
          <p>Explore the main page</p>
          <div className="menu-item">
            <Link to={'/Profile'}>
              <button className="menu-button">Profile</button>
            </Link>
            <p>View your trainer profile</p>
          </div>
        <hr/>
          
        <div style={{ marginBottom: '50px' }} />
           <div>
           <h1>About Me</h1>
           </div>
           <div style={{ marginBottom: '50px' }} />
           
          <div className="profile-section">
            <div className="image-container">
              <img src={ImagenCara} alt='Foto de mi Cara' className="rounded-image"/>
            </div>

            <div className="bio">
              <p className="bio-text">Hello! I'm Uriel Castillo, a passionate 18-year-old FullStack developer, graduated from Henry. My fascination with programming goes beyond code. I'm driven by the potential to transform big ideas into innovative and accessible solutions that enhance people's lives.</p>
              <br/>
              <p className="bio-text">This webpage is about visualizing Pokemon cards where you can learn a lot about them. There is also a section where you can create your own Pokemon. Have fun on this page; I created it with a lot of effort, always trying to do my best. Stay tuned for upcoming changes!</p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Menu;