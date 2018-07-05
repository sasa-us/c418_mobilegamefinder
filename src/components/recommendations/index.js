import React from 'react';
import GameComponent from './gamecomponent';
import './recommendations.scss';
import Data from '../gamedetails/dummydata';
import GeneralText from '../multiuse/generaltext';

export default props => {
    const genText = 'Based on your response, these are some games we think you would like.'
    return (
        <div className="recContainer">
            <h2>Recommendations Page</h2>
            <GeneralText text={genText} />
            <div className="detailContainer">
                <GameComponent details={Data[0]}/>
                <GameComponent details={Data[1]}/>
                <GameComponent details={Data[2]}/>
                <GameComponent details={Data[3]}/>
                <GameComponent details={Data[4]}/>
                <GameComponent details={Data[5]}/>
                <GameComponent details={Data[6]}/>
                <GameComponent details={Data[7]}/>
                <GameComponent details={Data[8]}/>
            </div>
        </div>
    )
}