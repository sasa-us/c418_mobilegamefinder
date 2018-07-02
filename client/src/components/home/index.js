import React from 'react';
import Carousel from '../carousel';
import './home.scss';
import GeneralText from '../multiuse/generaltext';



export default props => {
    const genText = 'General text area. We would have basic info about what the page is for, etc. here.'
    return (
        <div className="homePageContainer">
            <h1>Home Page</h1>
            <GeneralText text={genText} />
            <Carousel />
        
        </div>
        
    )
}