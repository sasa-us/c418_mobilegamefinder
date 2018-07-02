import React from 'react';
import Carousel from '../carousel';
import './home.scss';
import GeneralText from '../multiuse/generaltext';



export default props => {
    return (
        <div className="homePageContainer">
            <h3>Home Page</h3>
            <GeneralText />
            <Carousel />
        
        </div>
        
    )
}