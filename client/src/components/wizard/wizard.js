import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Shield from "../../assets/images/wizard-icons/001-shield.png";
import Chess from "../../assets/images/wizard-icons/002-horse.png";
import Jewel from "../../assets/images/wizard-icons/003-diamond.png";
import Puzzle from "../../assets/images/wizard-icons/004-puzzle.png";
import Cards from "../../assets/images/wizard-icons/005-poker.png";
import Poker_Chip from "../../assets/images/wizard-icons/006-poker-chip.png";
import Dice  from "../../assets/images/wizard-icons/007-dice.png";
import Gun from "../../assets/images/wizard-icons/008-gun.png";
import Mystery from "../../assets/images/wizard-icons/009-block.png";
import "./wizard.scss";


class Wizard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div className="wizardContainer">

                    <h4 className="gameName">Which game pieces appeal to you?</h4>


                    <div className="gameIcons">

                        <div className="flexRow">
                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Shield} />
                            </div>

                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Chess} />
                            </div>

                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Jewel} />
                            </div>
                        </div>

                        <div className="flexRow">
                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Puzzle}/>
                            </div>
                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Cards}/>
                            </div>

                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Poker_Chip}/>
                            </div>
                        </div>

                        <div className="flexRow">
                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Dice}/>
                            </div>

                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Gun}/>
                            </div>

                            <div className="icon">
                                <div className=""></div>
                                <img className="game_wiz" src ={Mystery}/>
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
export default Wizard
