import React from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import {Route, Link} from 'react-router-dom';
import Home from './home';
import Browse from './browse';
import Wizard from './wizard';
import Search from './search';
import About from './about';




const App = () => (
        <div>
            <div className="app">
                <h1>Game Ferret</h1>
            </div>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/wizard">Wizard</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/wizard" component={Wizard}/>
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>

        </div>
        
);

export default App;
