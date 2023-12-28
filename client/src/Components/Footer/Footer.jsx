import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="container-fluid " >
      <div className='row p-5 bg-secondary text-white'>

        

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className='h3'>Social media</p>
          <p>Instagram: pxccchi</p>
          <p>LinkedIn: www.linkedin.com/in/uriel-castillo-b782b0270</p>
          <p>Email: urielcastillo891@gmail.com</p>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className='h5'>About</p>
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Our Story</Accordion.Header>
              <Accordion.Body>
                Welcome to our Pokémon Card Collection! We started our journey with a passion for Pokémon and a desire to share the excitement with fellow trainers. Our mission is to provide a platform where you can explore and collect the amazing world of Pokémon cards. Join us on this adventure as we continue to expand our collection and celebrate the magic of Pokémon!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Mission and Vision</Accordion.Header>
              <Accordion.Body>
                At Pokémon Card Collection, our mission is to be the ultimate destination for Pokémon enthusiasts. We strive to offer a diverse range of cards, from classic favorites to rare gems. Our vision is to create a community where trainers can connect, trade, and discover the wonder of Pokémon. Join us in building a collection that reflects the rich history and excitement of the Pokémon universe!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="col-xs-12 col-md-6 col-lg-3">
          <p className='h5'>Terms and conditions</p>
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Terms of Service</Accordion.Header>
              <Accordion.Body>
                By using Pokémon Card Collection, you agree to abide by the following terms: All Pokémon cards displayed are for informational purposes only. We do not sell or trade cards directly on this platform. Users are responsible for their interactions and transactions. Pokémon and related trademarks are the property of Nintendo, Game Freak, and Pokémon. We encourage respectful and positive engagement within our community.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Privacy Policy</Accordion.Header>
              <Accordion.Body>
                Your privacy is important to us. We collect minimal personal information for account creation and communication purposes. We do not share your information with third parties. By using our website, you consent to the use of cookies for a better user experience. For detailed information, please review our full Privacy Policy.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Footer;