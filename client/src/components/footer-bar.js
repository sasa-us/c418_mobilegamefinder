import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/footer-bar.scss'
import Twitter from '../assets/images/twitter.png';
import Facebook from '../assets/images/facebook.png';
import Mail from '../assets/images/mail.png';


class FooterBar extends Component {
    constructor(props){
        super(props);

        };


    render() {
        return(
            <div className="footerContainer">
                    <footer className="footer">

                        <ul>
                            <li id="social">
                                <img className="social" src={Facebook}/>
                                <img className="social" src={Twitter}/>
                                <img className="social" src={Mail}/>
                            </li>
                        </ul>
                        <p>
                            Copyright &copy; 2018 Games Ferret.
                        </p>
                    </footer>
            </div>
        )
    }
}

export default FooterBar;