import React, {Component} from 'react';
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
                            <li>
                                <img src={Facebook}/>
                            </li>
                            <li>
                                <img src={Twitter}/>
                            </li>
                            <li>
                                <img src={Mail}/>
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