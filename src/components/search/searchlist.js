import React from 'react';
import {Route, Link} from 'react-router-dom';


export default props => {
    return (
        <div>
            <h1>Search Result Page</h1>
            <Link to="search/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="search/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="search/gamedetails"><h2>Search result - links to Game Details</h2></Link>
            <Link to="search/gamedetails"><h2>Search result - links to Game Details</h2></Link>
        </div>
        
    )
}