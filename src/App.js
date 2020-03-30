  
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { About } from './About';
import { Footer } from './Footer';
import { NavigationBar } from './Components/Header';
import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layout';
import pf from "petfinder-client";
import Pet from "./Pet"


const App = () => {
  const App_SECRET="zkHIDM4bKmBSyEhI6bZlmATxWGAQJ0dmxHw2PU5j";
  const APP_KEY = "yR0OMcncKcTmfuAuyREFp6tZowt6gDsynub72rliOeMnpuNCrj";


const [Pet, setPet] = useState(0);

useEffect( () => {
  getPets()
}, []);

const getPets = async () => {
  const response = await fetch(`https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
  `);
  const data = response.json
  console.log(data);
}


  return (
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit"> 
      Search
      </button>
    </form>
  </div>
  );
};

export default App; 




   {/*         class MyCarousel extends React.Component {
  constructor() {
    super()
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <div>
      <input
        type="number"
        value={this.state.value}
        onChange={e => this.onChange(parseInt(e.target.value || 0))}
      />
      <Carousel
        value={this.state.value}
        onChange={this.onChange}
        slides={[
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516985/shutterstock_280679357-1600x600_vyarqx.jpg' />),
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516939/photo-1518791841217-8f162f1e1131_x9ejla.jpg' />),
          (<img src='https://res.cloudinary.com/dnxx8igwb/image/upload/v1585516950/can-dogs-sense-a-good-person_training_ouoawr.jpg' />),
        ]}
        arrows
        clickToChange
      /> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/*  HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
     HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
     HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
     HERE IMPORT FROM API TO CREATE 3 CARDS FOR RANDOM ANIMALS
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    );
    </div> */}