import React from 'react';
import GameComponent from './gamecomponent';
import './results.scss';
import Data from '../gamedetails/dummydata';
import GeneralText from '../multiuse/generaltext';

export default props => {
    const genText = props.text;
    return (
        <div className="resContainer">
            <h2>{props.title}</h2>
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