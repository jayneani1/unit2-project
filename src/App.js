  
import React, { useEffect, useState } from "react";
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
import Search from './Search';
import Random from './Random'


const App = () => {

  return (
  <div className="App">
     <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit"> 
      Search
      </button>
    </form>
    <Random />
  </div>
  )
  }

export default App;

/*
const App = () => {
  //const APP_ID: "the-cocktail-db.p.rapidapi.com"
	//const APP_KEY: "eb3065d7e6msh853958a644ba891p1bfa55jsn052d79c1de99";

const [Drink, setDrink] = useState(0);

useEffect( () => {
  getDrinks()
}, []);

function App() {
  const [random, setRandom] = useState("")
    useEffect((launches) => {
        const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const makeAPICall = async () => {
          const res = await fetch(randomUrl);
          const json = await res.json();
          setRandom(json);
        };
        makeAPICall();
      }, []);
  
  
  return (
        <h1>{random.strDrink}</h1>
  )
  }


  return (
  <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text" />
      <button className="search-button" type="submit"> 
      Search
      </button>
    </form>
    {recipes.map(recipe => (
      <Random />

    ))}
  </div>
  );
};

export default App; 







  /*      class MyCarousel extends React.Component {
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
    </div> */