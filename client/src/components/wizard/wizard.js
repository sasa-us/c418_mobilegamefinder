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

            <div className="wizard-container-fluid">
                <div className="row">
                    <h4 className="col-xs-12 gameName">Which game pieces appeal to you?</h4>
                </div>

                <div className="gameIcons">
                    <div className="icon col-xs-3 col-xs-offset-1 text-center well hidden-md hidden-lg">
                        <div id="no1" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Shield} />
                    </div>

                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no2" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Chess} />
                    </div>

                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no3" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Jewel} />
                    </div>
                    <div className="icon col-xs-3 col-xs-offset-1 text-center well hidden-md hidden-lg">
                        <div id="no4" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Puzzle}/>
                    </div>
                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no5" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Cards}/>
                    </div>

                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no6" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Poker_Chip}/>
                    </div>

                    <div className="icon col-xs-3 col-xs-offset-1 text-center well hidden-md hidden-lg">
                        <div id="no7" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Dice}/>
                    </div>

                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no8" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Gun}/>
                    </div>

                    <div className="icon col-xs-3 text-center well hidden-md hidden-lg">
                        <div id="no9" className="col-xs-4 col-md-4"></div>
                        <img className="game_wiz" src ={Mystery}/>
                    </div>
                    <div>
                        <button className="wizard-button" type="button">Submit</button>
                    </div>
                </div>
            </div>

        )
    }

}
export default Wizard
