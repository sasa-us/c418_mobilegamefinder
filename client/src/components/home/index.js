import React from 'react';
import Carousel from '../carousel';
import './home.scss';
import GeneralText from '../multiuse/generaltext';



export default props => {
    return (
        <div className="homePageContainer">
            <h1>Home Page</h1>
            <GeneralText />
            <Carousel />
        
        </div>
        
    )
}