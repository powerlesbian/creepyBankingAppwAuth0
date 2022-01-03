import React from "react";
import {Card} from 'react-bootstrap';
import creepy from '../images/creepy.jpg';
import logo from "../assets/logo.svg";

const Hero = () => (
    <Card style={{ width: '33rem' }}>
      <Card.Img variant="top" src={creepy} alt="something creepy"/>
      <Card.Body>
        <Card.Title>We believe real value is stored in crazy humans</Card.Title><pre></pre>
        <Card.Header>Bank of Humans is the creepy bank of your tomorrow</Card.Header><pre></pre>
        <Card.Text>
      This is the customer portal for Bank of Humans.  Login with our Authentication provider Auth0 for safe access to our bank services. Explore our bank pages using the navigation bar
        </Card.Text>
      </Card.Body>
    </Card>
  )

export default Hero;
