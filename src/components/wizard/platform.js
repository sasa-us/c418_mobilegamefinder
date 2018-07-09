import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Apple from "../../assets/images/wizard-icons/001-apple.png";
import Android from "../../assets/images/wizard-icons/002-android.png";
import "./wizard.scss";


class Platform extends Component {
    constructor(props) {
        super(props);
        this.state={
            price:"",

        };
        this.handleIconClick = this.handleIconClick.bind(this);
    }

    handleIconClick(e, title) {
        let platform = {
            platform: title
        };
        this.setState(platform);
        localStorage.setItem('platform', JSON.stringify(platform));
        console.log(localStorage);
    }

    render() {
        return(

            <div className="wizardContainer">

                <h4 className="priceGameName">Choose your platform...</h4>


                <div className="priceIcons">

                    <div className="flexColumn">
                        <div className="icon">
                            <img className="game_wiz" src ={Apple} onClick={(e) => this.handleIconClick(e, 'apple')}/>
                        </div>

                        <div className="icon">
                            <img className="game_wiz" src ={Android} onClick={(e) => this.handleIconClick(e, 'android')}/>
                        </div>

                    </div>
                </div>
                <div className="buttonContainer">
                    <Link to="/price">
                        <button className="wizard-button" type="button">Back</button>
                    </Link>

                    <Link to="/genre">
                        <button className="wizard-button" type="button">Next</button>
                    </Link>
                </div>
            </div>

        )
    }

}
export default Platform;
