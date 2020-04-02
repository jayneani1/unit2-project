  
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from 'react-router-dom';
import { NavigationBar } from './Components/Header';
import Search from './Components/Search/Search';
import Random from './Components/Random/Random';
import Footer from './Components/Footer/Footer'
import CarouselPage from './Components/Carousel/Carousel';


const App = () => {

  return (
  <div className="App">
    <NavigationBar />
    <switch>
    <Route
          exact path='/'
          render={props => <CarouselPage {...props}/>}
        />
    <Route
          path='/search'
          render={props => <Search /> }
        />
    <Route
          path='/random'
          render={props => <Random />}
        />
    </switch>
    <Random />
    <Footer />
  </div>
  )
  }

export default App;