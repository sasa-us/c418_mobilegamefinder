import React from 'react';
import './about.scss';


export default props => {
    return(
        <div className="devItem">
                <img src={props.src} alt={props.name} className="devImg"/>
                <div className="devText">
                    <h3 className="devName">{props.name}</h3>
                    <p className="title">{props.title}</p>
                    <div className="devIcons">
                        <a href={props.site} target='blank_'><span className="fa fa-globe fa-lg"></span></a>
                        <a href={props.github} target='blank_'><span className="fab fa-github fa-lg"></span></a>
                        <a href={props.linkedin} target='blank_'><span className="fab fa-linkedin fa-lg"></span></a>
                        <a href={props.email} target='blank_'><span className="fa fa-envelope fa-lg"></span></a>
                    </div>
                </div>
            
        </div>
    )
} 