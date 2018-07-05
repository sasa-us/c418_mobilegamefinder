import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Apple from "../../assets/images/wizard-icons/001-apple.png";
import Android from "../../assets/images/wizard-icons/002-android.png";
import "./wizard.scss";


class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div className="wizardContainer">

                <h4 className="priceGameName">Choose your platform...</h4>


                <div className="priceIcons">

                    <div className="flexColumn">
                        <div className="icon">
                            <div className=""></div>
                            <img className="game_wiz" src ={Apple} />
                        </div>

                        <div className="icon">
                            <div className=""></div>
                            <img className="game_wiz" src ={Android} />
                        </div>

                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="wizard-button" type="button">Submit</button>
                </div>
            </div>

        )
    }

}
export default Wizard;
