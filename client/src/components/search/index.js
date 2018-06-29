import React from 'react';
import {Route, Link} from 'react-router-dom';
import SearchList from "../search/searchlist";

export default props => {
    return (
        <div>
            <h1>Search Page</h1>
            <SearchList  />
        </div>
        
    )
}