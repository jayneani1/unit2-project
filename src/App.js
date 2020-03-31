  
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { FooterPage } from './Footer';
import { NavigationBar } from './Components/Header';
import Search from './Components/Search/Search';
import Random from './Components/Random/Random';
import Footer from './Components/Footer/Footer'
//import "~bootstrap/scss/bootstrap";


const App = () => {

  return (
  <div className="App">
    <NavigationBar />
    <Search /> 
    <Random />
    <Footer />
  </div>
  )
  }

export default App;



  /*     

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
    </div> */