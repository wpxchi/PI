import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SuccessAlert from "../../Utils/successAlert";
import './Register.css';
import ValidationRegister from "../../Utils/Validations/VRegister";

const RegisterModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({
    Name: '',
    LastName: '',
    UserName: '',
    Email: '',
    Password: '',
    Image: 'imagen.jpg',
  });

  const [Errors, setErrors] = useState({});
  const [ErrorMessage, setErrorMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Great, your account was created successfully, now login with your credentials');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = ValidationRegister(form);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post('http://localhost:3001/users/register', form);
        handleClose();
        setShowAlert(true);
      } catch (error) {
        console.log(error);
        setErrorMessage('There is already a user with these credentials')
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="error-container">
            <label>Name:</label>
            <input type="text" value={form.Name} onChange={handleFormChange} name="Name" placeholder="Your Name" />
            {Errors.Name && <p className="error-message">{Errors.Name}</p>}
          </div>

          <div className="error-container">
            <label>Lastname:</label>
            <input type="text" value={form.LastName} onChange={handleFormChange} name="LastName" placeholder="Your Lastname" />
            {Errors.LastName && <p className="error-message">{Errors.LastName}</p>}
          </div>

          <div className="error-container">
            <label>Username:</label>
            <input type="text" value={form.UserName} onChange={handleFormChange} name="UserName" placeholder="Your Username" />
            {Errors.UserName && <p className="error-message">{Errors.UserName}</p>}
          </div>

          <div className="error-container">
            <label>Email:</label>
            <input type="text" value={form.Email} onChange={handleFormChange} name="Email" placeholder="Pokemon@example.com" />
            {Errors.Email && <p className="error-message">{Errors.Email}</p>}
          </div>

          <div className="error-container">
            <label>Password:</label>
            <input type="password" value={form.Password} onChange={handleFormChange} name="Password" placeholder="Your Password" />
            {Errors.Password && <p className="error-message">{Errors.Password}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create Account
          </Button>
          <p className="error-message">{ErrorMessage}</p>
        </Modal.Footer>
      </Modal>

      <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert} alertMessage={alertMessage} />
    </>
  );
}

export default RegisterModal;