import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {formatPostData} from '../helpers';
import SearchIcon from '../assets/images/menu-icon-search.png';
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
            },
            searchTerm: ""
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
    // -------------------------------------------------------------------------------------
    async handleSearchInputChange(event){
        await this.setState({
            ...this.state,
            searchTerm: event.target.value
        });
    }
    handleSearchSubmit(event){
        event.preventDefault();

        axios.post('/api/gameapp.php', formatPostData({
            search_term: this.state.searchTerm
        }), {
            params: {
                action: 'search'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }
    // -------------------------------------------------------------------------------------
    render() {
        const menuOverlayStyle = {
            background: this.state.dropdownsOpen.main ? "rgba(255,255,255,.5)" : "rgba(0,0,0,0)",
            "pointerEvents": this.state.dropdownsOpen.main ? "auto" : "none"
        };
        // -----------------------------------
        const mainMenuButtonPosition = {
            transform: this.state.dropdownsOpen.main ? "translateX(99px)" : "translateX(0px)"
        };
        const hamburgerXdiv2 = {
            transform: this.state.dropdownsOpen.main ? "rotateZ(-45deg)" : "initial"
        };
        const hamburgerXdiv3 = {
            transform: this.state.dropdownsOpen.main ? "rotateZ(45deg)" : "initial"
        };
        const hamburgerXdivFade = {
            opacity: this.state.dropdownsOpen.main ? "0" : "1"
        }
        // -----------------------------------
        const mainMenuStyle = {
            width: this.state.dropdownsOpen.main ? "167px" : "0",
            "borderRight": this.state.dropdownsOpen.main ? "1px solid #F0C808" : "none"
        };
        const browseMenuStyle = {
            height: this.state.dropdownsOpen.browse ? "90px" : "0",
            "marginTop": this.state.dropdownsOpen.browse ? "15px" : "0"
        };
        const aboutMenuStyle = {
            height: this.state.dropdownsOpen.about ? "20px" : "0",
            "marginTop": this.state.dropdownsOpen.about ? "15px" : "0"
        };
        const searchDropDownStyle = {
            height: this.state.dropdownsOpen.search ? "40px" : "0",
            "borderBottom": this.state.dropdownsOpen.search ? "1px dashed #F25B43" : "none"
        };

        return(
            <div>
                <nav className="header">
                    <div className="menu-overlay" onClick={this.toggleMainMenu.bind(this)} style={menuOverlayStyle}></div>
                    <button className="menu-icon" type="button" onClick={this.toggleMainMenu.bind(this)} style={mainMenuButtonPosition} aria-expanded={`${this.state.dropdownsOpen.main ? "true" : "false"}`} aria-label="Toggle main navigation menu">
                        <div className="hamburger-animation">
                            <div style={hamburgerXdivFade}></div>
                            <div style={hamburgerXdiv2}></div>
                            <div style={hamburgerXdiv3}></div>
                            <div style={hamburgerXdivFade}></div>
                        </div>
                    </button>
                    <ul className="main-menu" style={mainMenuStyle}>
                        <Link to="/"><li className="nav-text">Home</li></Link>
                        <Link to="/search"><li className="nav-text">Search</li></Link>
                        <li className="nav-text">
                            <div className="plus-bar" onClick={this.toggleBrowseMenu.bind(this)}>
                                <Link to="/browse">Browse </Link>
                                <span className={`glyphicon glyphicon-${this.state.dropdownsOpen.browse ? "minus" : "plus"}`} alt="list expand icon" aria-expanded={`${this.state.dropdownsOpen.browse ? "true" : "false"}`} aria-label="Browse-Menu expansion"></span>
                            </div>
                            <ul className="browse-menu" style={browseMenuStyle}>
                                <li><a>By Popularity</a></li>
                                <li><a>By Genre</a></li>
                                <li><a>By Price</a></li>
                                <li><a>By Developer</a></li>
                            </ul>
                        </li>
                        <Link to="/wizard"><li className="nav-text">Wizard</li></Link>
                        <li className="nav-text nav-text-bottom">
                            <div className="plus-bar" onClick={this.toggleAboutMenu.bind(this)}>
                                <Link to="/about">About </Link>
                                <span className={`glyphicon glyphicon-${this.state.dropdownsOpen.about ? "minus" : "plus"}`} alt="list expand icon" aria-expanded={`${this.state.dropdownsOpen.about ? "true" : "false"}`} aria-label="About-Menu expansion"></span>
                            </div>
                            <ul className="about-menu" style={aboutMenuStyle}>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="appName">Games Ferret</h2>
                    <div className="fas fa-search search-icon" onClick={this.toggleSearchBar.bind(this)}></div> 
                </nav>
                <div className="dropdownSearch" style={searchDropDownStyle}>
                    <div>
                        <form className="form-inline dropForm" onSubmit={this.handleSearchSubmit.bind(this)}>
                            <div className="fa fa-search search-button" aria-hidden="true"></div>
                            <input className="dropdownInput form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..." aria-label="Search" onChange={this.handleSearchInputChange.bind(this)} value={this.state.searchTerm}/>
                        </form>
                    </div>
                </div>
            </div>
        )  
    }
}

export default HeaderBar;