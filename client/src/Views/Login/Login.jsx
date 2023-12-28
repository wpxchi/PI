import React, { useState } from 'react';
import axios from 'axios';
import RegisterModal from '../../Components/Register/RegisterModal';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import ValidationLogin from '../../Utils/Validations/VLogin';

export const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Email: '',
    Password: '',
  });

  const [error, setError] = useState('');
  const [ErrorLogin, setErrorLogin] = useState({})
  const [show, setShow] = useState(false);

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = ValidationLogin(form);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/users/login', form);
        localStorage.setItem('Name', response.data.user.Name);
        localStorage.setItem('Lastname', response.data.user.LastName);
        localStorage.setItem('Email', response.data.user.Email);
        localStorage.setItem('Image', response.data.user.Image);
        localStorage.setItem('Username', response.data.user.UserName);
        localStorage.setItem('Token', response.data.token);
        navigate('/Profile');
      } catch (error) {
        setError('Incorrect credentials');
      }
    } else {
      setErrorLogin(validationErrors);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="Email"
            value={form.Email}
            onChange={handleFormChange}
            placeholder="Pokemon@example.com"
          />
          {ErrorLogin.Email && <p style={{ color: 'red', fontSize: '14px' }}>{ErrorLogin.Email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="Password"
            value={form.Password}
            onChange={handleFormChange}
            placeholder="Your Password"
          />
            {ErrorLogin.Password && <p style={{ color: 'red', fontSize: '14px' }}>{ErrorLogin.Password}</p>}
        </div>
        <div className="form-text">We'll never share your information with anyone else.</div>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
        <div style={{ color: 'red', fontSize: '14px' }}>
          <p>{error}</p>
        </div>
      </form>
      <div>
        <p>You do not have an account? Create One </p>
        <button onClick={handleShow} className="btn btn-custom-outline">
          Create Account
        </button>
      </div>
      <RegisterModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default Login;
