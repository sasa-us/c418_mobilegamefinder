import React from 'react';
import {Route, Link} from 'react-router-dom';
import BrowseResults from './browseresultlist';

export default (props) => {
    console.log('PROS:', props);
    return (
        <div> 
            <Link to="/browse/category"><h2>Category Name - links to Category Search</h2></Link>
            <Route path="/browse/category" component={BrowseResults}/>
        </div>
        
    )
}