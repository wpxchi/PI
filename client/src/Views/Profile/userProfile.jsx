import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UserProfile.css"; // Make sure to create a UserProfile.css file for these styles

const UserProfile = () => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const user = localStorage.getItem("Username");
    setUsername(user);
    const name = localStorage.getItem("Name");
    setName(name);
    const lastName = localStorage.getItem("Lastname");
    setLastName(lastName);
    const emailValue = localStorage.getItem("Email");
    setEmail(emailValue);
    const imageValue = localStorage.getItem("Image");
    setImage(imageValue);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-panel">
        <h3>Your Profile Panel</h3>
      </div>
      <div className="container-two-division">
        <div className="your-profile-panel">
          <div className="container-user-profile">
            <div className="user-profile-info-section">
              <div className="create-event-panel-info">
                <div>
                  <div className="user-date">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                    </svg>
                    <h5>Your Data</h5>
                  </div>
                  <hr />
                </div>
                <div className="elements-panel">
                  <div className="element-panel">
                    <small>Name: </small>
                    <span>{`${name} ${lastName}`}</span>
                  </div>
                  <hr />
                  <div className="element-panel">
                    <small>Username: </small>
                    <span>{username}</span>
                  </div>
                  <hr />
                  <div className="element-panel">
                    <small>Email: </small>
                    <span>{email}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-profile-action-section">
              <Link to={"/HomePage"}>
                <button className="button-view-pokemons">View Pokemons</button>
              </Link>
              <div style={{ margin: '10px' }}></div>
              <Link to={'/Forms'}>
              <button className="button-view-pokemons">Create Pokemons</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;