import React from 'react';
import HeaderBar from '../header-bar';
import {Route, Link} from 'react-router-dom';
import Browse from '../browse';
import Wizard from '../wizard';
import Search from '../search';
import About from '../about';


export default props => {
    return (
        <div>
            <HeaderBar/>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/wizard">Wizard</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Route path="/browse" component={Browse}/>
            <Route path="/wizard" component={Wizard}/>
            <Route path="/search" component={Search}/>
            <Route path="/about" component={About}/>
        </div>
        
    )
}