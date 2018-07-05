import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Free from "../../assets/images/wizard-icons/001-money.png";
import Paid from "../../assets/images/wizard-icons/002-free.png";
import "./wizard.scss";


class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div className="wizardContainer">

                <h4 className="priceGameName">Are you looking for PAID or FREE games?</h4>


                <div className="priceIcons">

                    <div className="flexColumn">
                        <div className="icon">
                            <div className=""></div>
                            <img className="game_wiz" src ={Free} />
                        </div>

                        <div className="icon">
                            <div className=""></div>
                            <img className="game_wiz" src ={Paid} />
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
