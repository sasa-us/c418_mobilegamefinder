import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '../assets/images/menu-icon-hamb.png';
import SearchIcon from '../assets/images/menu-icon-search.png';
import Plus from '../assets/images/plus.png';
import '../assets/css/header-bar.scss'

class HeaderBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownsOpen: {
                main: false,
                browse: false,
                about: false,
                search: false
            }
        };
    }

    toggleMainMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = !this.state.dropdownsOpen.main;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = false;
        this.state.dropdownsOpen.search = false;

        this.setState({
            ...this.state
        });
    }
    toggleBrowseMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = !this.state.dropdownsOpen.browse;
        this.state.dropdownsOpen.about = false;

        this.setState({
            ...this.state
        });
    }
    toggleAboutMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = !this.state.dropdownsOpen.about;

        this.setState({
            ...this.state
        });
    }
    toggleSearchBar(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = false;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = false;
        this.state.dropdownsOpen.search = !this.state.dropdownsOpen.search;

        this.setState({
            ...this.state
        });
    }

    render() {
        const mainMenuButtonStyle = {
            transform: this.state.dropdownsOpen.main ? "translateX(75px)" : "translateX(0px)"
        };
        const mainMenuStyle = {
            width: this.state.dropdownsOpen.main ? "36%" : "0"
        };
        const browseMenuStyle = {
            height: this.state.dropdownsOpen.browse ? "90px" : "0",
            "margin-top": this.state.dropdownsOpen.browse ? "15px" : "0"
        };
        const aboutMenuStyle = {
            height: this.state.dropdownsOpen.about ? "20px" : "0",
            "margin-top": this.state.dropdownsOpen.about ? "15px" : "0"
        };
        const searchDropDownStyle = {
            height: this.state.dropdownsOpen.search ? "40px" : "0"
        };

        return(
            <div>
                <nav className="header">
                    <img className="menu-icon" src={MenuIcon} alt="menu icon" aria-label="Menu" onClick={this.toggleMainMenu.bind(this)} style={mainMenuButtonStyle}/>
                    <ul className="main-menu" style={mainMenuStyle}>
                        <li className="navbar-text"><Link to="/">Home</Link></li>
                        <li className="navbar-text"><Link to="/search">Search</Link></li>
                        <li className="navbar-text">
                            <div className="plus-bar" onClick={this.toggleBrowseMenu.bind(this)}>
                                <Link to="/browse">Browse </Link>
                                <img className="plus-icon" src={Plus} alt="plus icon"/>
                            </div>
                            <ul className="browse-menu" style={browseMenuStyle}>
                                <li><a>By Popularity</a></li>
                                <li><a>By Genre</a></li>
                                <li><a>By Price</a></li>
                                <li><a>By Developer</a></li>
                            </ul>
                        </li>
                        <li className="navbar-text"><Link to="/wizard">Wizard</Link></li>
                        <li className="navbar-text">
                            <div className="plus-bar" onClick={this.toggleAboutMenu.bind(this)}>
                                <Link to="/about">About </Link>
                                <img className="plus-icon" src={Plus} alt="plus icon"/>
                            </div>
                            <ul className="about-menu" style={aboutMenuStyle}>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="appName">Games Ferret</h2>
                    <img className="search-icon" src={SearchIcon} alt="search icon" onClick={this.toggleSearchBar.bind(this)}/> 
                </nav>
                <div className="dropdownSearch" style={searchDropDownStyle}>
                    <div>
                        <form className="form-inline dropForm">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input className="dropdownInput form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..." aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default HeaderBar;