import React, {Component } from 'react';
import "./firstTimeModal.css";
import WelcomeScreen from "../../assets/images/wizard-icons/welcomemodal.png"

class FirstTimeModal extends Component {

    render() {
        const {content, handleClose, parentComponent } = this.props; //pass props from the parent component
        const showHideClassName = content ? 'modal modal-visible display-block' : 'modal display-none';


        return (
            <div className={showHideClassName} onClick={handleClose}>
                <div className='welcome-main'>
                <img className="welcomeModal" src={WelcomeScreen}/>

            </div>
            </div>
        );
    }
}

export default FirstTimeModal;