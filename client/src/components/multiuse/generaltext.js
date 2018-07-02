import React from 'react';
import './generaluse.scss';

export default props => {
    return(
        <div className="generalTextContainer">
            <p>
                {props.text}
            </p>
        </div>
    )
}