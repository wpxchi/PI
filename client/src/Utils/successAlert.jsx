import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './successAlert.css';

function SuccessAlert({ showAlert, setShowAlert, alertMessage }) {
  if (showAlert) {
    return (
      <>
        <Alert show={showAlert} variant="success">
          <Alert.Heading>Pokemon PI</Alert.Heading>
          <p>{alertMessage}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShowAlert(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  return null;
}

export default SuccessAlert;