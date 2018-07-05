import React from 'react';
import {Route, Link} from 'react-router-dom';
import BrowseResults from './browseresultlist';
import Results from "../results/results";

export default (props) => {
    console.log('PROS:', props);
    return (
        <div> 
            <Results/>
        </div>
        
    )
}