import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameInfo from '../gamedetails';

export default props => {
    return (
        <div>
            <h1>Search Result Page</h1>
            <Link to="/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Route path='/gamedetails' component={GameInfo} />   
        </div>
        
    )
}