import React, {Component} from 'react';
import ReactStars from 'react-stars';
import {withRouter} from 'react-router-dom';
import iOS from '../../assets/images/iOS/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Android from '../../assets/images/android/google-play-badge.png';
import './gamedetails.scss';
import {connect} from 'react-redux';
import {viewDetails} from '../../actions/';
import formatPostData from '../../helpers/';
import axios from 'axios';
import Loader from '../loader';
import GameComponent from '../results/gamecomponent';
import GameRenderer from '../results/gamerenderer';

class GameDetailsIndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            infoExpanded: {
                gameDescripSection: false
            },
        };
    };
    toggleDescriptionExpand(event){
        event.stopPropagation();
        this.state.infoExpanded.gameDescripSection = !this.state.infoExpanded.gameDescripSection;
        this.setState({
            ...this.state
        });
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component did update!!!!!!');
        console.log('PREV PROPS:', prevProps);
        console.log('Current Props:', this.props);
        console.log('PREV State:', prevState);
        console.log('Current State:', this.state);

    }

    componentDidMount(){
        window.scrollTo(0, 0);
        if(!this.props.viewDetails){
            const newItem = {searchrequest: this.props.match.params.game_details};
            const postItem = formatPostData(newItem);
            const resp = axios.post('/api/gameapp.php', postItem, {
                params: {
                    action: 'details'
                }
            })
        } else {
            this.props.viewDetails(this.props.match.params.game_details);
        }
    }
    render(){
        if (!this.props.details){
            return (
                <Loader />
            )
        }
        const gameDetails = this.props.details;
        const gameDescripExpand = {
            height: this.state.infoExpanded.gameDescripSection ? "auto" : "144px",
            background: this.state.infoExpanded.gameDescripSection ? "transparent" : "linear-gradient(to bottom, rgba(175,238,238,0), rgba(175,238,238,0.2))"
        };
        const expandButton = this.state.infoExpanded.gameDescripSection ? "less.." : "more..";
        // --------------------------------------
        let getiOS = false;
        let getAndroid = false;
        if (gameDetails.platform === "both") {
            getiOS = true
            getAndroid = true
        } else if (gameDetails.platform === "apple") {
            getiOS = true
        } else if (gameDetails.platform === "android") {
            getAndroid = true
        }
        const iOSButtonDisplay = {
            display: getiOS ? "block" : "none"
        }
        const androidButtonDisplay = {
            display: getAndroid ? "block" : "none"
        }
        //----------------------------------
        
        const data = this.props.details.related_game_apps;
        console.log('location', location);
        let showRelated = true;
        if(!this.props.details.related_game_app  || !this.props.details.related_apps ){
            showRelated = false;            
        }
        const relatedApps = {
            display: showRelated ? "block" : "none"
        };
        console.log('props', this.props);
        
        // --------------------------------------
        return(
            <div className="singleGamePage">
                <div className="gameTitle">
                    <h2>{gameDetails.app_name}</h2>
                </div>
                <div className="upperDisplay">
                    <div className="gameImg">
                        <img src={gameDetails.icon_url}/>
                    </div>
                </div>
                <div className="gameDetailsBottom">
                    <div className="detailsBottomInnerBox">
                        <div className="priceAndRating">
                            <h4>
                                {gameDetails.price_value}
                            </h4>
                            <div className="ratingStars">
                                <h5 className="ratingNum">
                                    {gameDetails.all_rating} 
                                </h5>
                                <ReactStars count={5} size={24} color2={'#ffd700'} value={parseFloat(gameDetails.all_rating)} edit={false}/>
                            </div>
                        </div>
                        <div className="getItHere">
                            <button type="iOSButton" style={iOSButtonDisplay}>
                                <img src={iOS} className="iOSButtonImg"/>
                            </button>
                            <button type="androidButton" style={androidButtonDisplay}>
                                <img src={Android} className="androidButtonImg"/>
                            </button>
                        </div>
                        <div>
                            <div className="gameDetailsTiny">
                                <div>
                                    <div>
                                        {gameDetails.publisher_name}
                                    </div>
                                    <div>
                                        {gameDetails.release_date.slice(0, 4)}
                                    </div>
                                </div>
                                <div className="genre">
                                    <div>
                                        Genre: 
                                    </div>
                                    <div>
                                        {gameDetails.genres.replace(/,/g ,", ")}
                                    </div>
                                </div>
                                <div>
                                    Rated: {gameDetails.content_rating}
                                </div>
                            </div>
                        </div>
                            <div className="screenshots"></div>
                        <h4 className="descripHeader">
                            Description
                        </h4>
                        <div className="gameDescripOuterBox">
                            <div dangerouslySetInnerHTML={{__html: gameDetails.description}} className="gameDescrip" style={gameDescripExpand} />
                        </div>
                        <div className="descripExpandDiv">
                            <button className="descripExpandButton" type="button" onClick={this.toggleDescriptionExpand.bind(this)}>
                                {expandButton}
                            </button>
                        </div>
                        <h4>Related Games</h4>   
                    </div> 
                </div>   
                 
                <div className="relatedCarousel" >
                // Need to setup flag in render to indicate if there is any data in the related games section.
                // Then set conditional to show or hide the gamerenderer component based on that flag. 
                //This should remove the issue with failure on load. 
                //Still need to research the location issue.
                    <GameRenderer data={data} />
                    {/* <div className="detailContainer">
                        {data.map(game => <GameComponent key={game.game_id} details={game} location={location}/>)}
                    </div> */}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        details: state.game.details,
        errors: state.game.errors
    }
}
export default withRouter(connect(mapStateToProps, {viewDetails})(GameDetailsIndexPage));