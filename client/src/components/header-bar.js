import React, {Component} from 'react';
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
                about: false
            }
        };
    }

    toggleMainMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.main = !this.state.dropdownsOpen.main;
        this.state.dropdownsOpen.browse = false;
        this.state.dropdownsOpen.about = false;

        this.setState({
            ...this.state
        });
    }
    toggleBrowseMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.browse = !this.state.dropdownsOpen.browse;

        this.setState({
            ...this.state
        });
    }
    toggleAboutMenu(event){
        event.stopPropagation();

        this.state.dropdownsOpen.about = !this.state.dropdownsOpen.about;

        this.setState({
            ...this.state
        });
    }

    render() {
        const mainMenuStyle = {
            display: this.state.dropdownsOpen.main ? "flex" : "none"
        };
        const browseMenuStyle = {
            display: this.state.dropdownsOpen.browse ? "flex" : "none"
        };
        const aboutMenuStyle = {
            display: this.state.dropdownsOpen.about ? "flex" : "none"
        };

        return(
            <div className="header col-xs-12">
                <img className="menu-icon" src={MenuIcon} alt="A small menu icon" onClick={this.toggleMainMenu.bind(this)}/>
                <ul className="main-menu" style={mainMenuStyle}>
                    <li><a>Home</a></li>
                    <li><a>Search</a></li>
                    <li>
                        <div className="plus-bar">
                            <a onClick={this.toggleBrowseMenu.bind(this)}>Browse </a>
                            <img className="plus-icon" src={Plus} alt="A small plus icon" onClick={this.toggleBrowseMenu.bind(this)}/>
                        </div>
                        <ul className="browse-menu" style={browseMenuStyle}>
                            <li><a>By Popularity</a></li>
                            <li><a>By Genre</a></li>
                            <li><a>By Price</a></li>
                            <li><a>By Developer</a></li>
                        </ul>
                    </li>
                    <li><a>Wizard</a></li>
                    <li>
                        <div className="plus-bar">
                            <a onClick={this.toggleAboutMenu.bind(this)}>About Us </a>
                            <img className="plus-icon" src={Plus} alt="A small plus icon" onClick={this.toggleAboutMenu.bind(this)}/>
                        </div>
                        <ul className="about-menu" style={aboutMenuStyle}>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </li>
                </ul>
                <h2>Games Ferret</h2>
                <img className="search-icon" src={SearchIcon} alt="A small search icon"/>
            </div>
        )  
    }
}

export default HeaderBar;