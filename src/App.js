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

class App extends Component {
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
            </>
        );
    }
}

export default App; 