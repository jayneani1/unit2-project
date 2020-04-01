  
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './Components/Header';
import Search from './Components/Search/Search';
import Random from './Components/Random/Random';
import Footer from './Components/Footer/Footer'
import CarouselPage from './Components/Carousel/Carousel';


const App = () => {

  return (
  <div className="App">
    <NavigationBar />
    <CarouselPage />
    <Search /> 
    <Random />
    <Footer />
  </div>
  )
  }

export default App;
