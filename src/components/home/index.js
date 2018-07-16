import React from 'react';
import Carousel from '../carousel';
import './home.scss';
import GeneralText from '../multiuse/generaltext';



export default props => {
    const genText = 'Welcome to GamesFerret!'
    return (
        <div className="homePageContainer">
        
            <GeneralText text={genText} />
            <Carousel />
        
        </div>
        
    )
}