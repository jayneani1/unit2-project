import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { About } from './About';
import { Footer } from './Footer';
import { NavigationBar } from './Components/Header';
import { NoMatch } from './NoMatch';
import { Search } from './Search'; 
import { Layout } from './Components/Layout';
import pf from "petfinder-client";
import Pet from "./Pet"

const petfinder = pf({
  key: process.env.yR0OMcncKcTmfuAuyREFp6tZowt6gDsynub72rliOeMnpuNCrj,
  secret: process.env.zkHIDM4bKmBSyEhI6bZlmATxWGAQJ0dmxHw2PU5j
});



class App extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
          pets: []
        };
      }
      // replace cDM
      componentDidMount() {
        petfinder.pet
          .find({ location: "Austin, TX", output: "full" })
          .then(data => {
            let pets;
            if (data.petfinder.pets && data.petfinder.pets.pet) {
              if (Array.isArray(data.petfinder.pets.pet)) {
                pets = data.petfinder.pets.pet;
              } else {
                pets = [data.petfinder.pets.pet];
              }
            } else {
              pets = []
            }
            this.setState({
              pets
            });
          });
      }
    // inside class, above render
componentDidMount() {
    petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
  }
    render() {
        return (
            <>
                <NavigationBar />
                <Layout>
                <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/About' component={About} />
                    <Route path='/Search' component={Search} />
                    <Route component={NoMatch} />
                </Switch>
                </Router>
                </Layout>

                <h1>Adopt Me!</h1>
                <pre>
  <code>{JSON.stringify(this.state, null, 2)}</code>
</pre>
      {this.state.pets.map(pet => {
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        return (
          <Pet
            animal={pet.animal}
            key={pet.id}
            name={pet.name}
            breed={breed}
          />
        );
      })}
   
            </>
        );
    }
}

export default App; 