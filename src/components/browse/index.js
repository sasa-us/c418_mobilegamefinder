import React from 'react';
import {Route, Link} from 'react-router-dom';
import CategoryList from "./categorylist";

export default props => {
    console.log('Browse PROPS:', props);
    return (
        <div>
            <CategoryList path={props.match.path} />
        </div>
        
    )
}