import React from 'react';
import {Link} from 'react-router-dom';
import sadferret from '../assets/images/sadferret.png'

export default props => {
    return(
        <div className="notFound">
            <img src={sadferret} alt="Sad Ferret"/>
            <h2>The page you're looking for was not found.</h2>
            <Link to='/'><h3>Go back to find some cool new games!</h3></Link>
        </div>
    )
}