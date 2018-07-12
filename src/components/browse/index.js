import React from 'react';
import {Route, Link} from 'react-router-dom';
import './browse.scss';

export default props => {
    console.log('Browse PROPS:', props);
    return (
        <div className="browseMain">
            Browse Results here.
        </div>
        
    )
}