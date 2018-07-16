import React, {Component} from 'react';
import ReactStars from 'react-stars';
// import Data from './dummydata';
import iOS from '../../assets/images/iOS/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Android from '../../assets/images/android/google-play-badge.png';
import './gamedetails.scss';
import {connect} from 'react-redux';
import ferret from '../../assets/images/ferretgif.gif';
import {viewDetails} from '../../actions/';

class GameDetailsIndexPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            infoExpanded: {
                gameDescripSection: false
            },
            randIndex: Math.floor(Math.random() * 10)
        };
    };
    toggleDescriptionExpand(event){
        event.stopPropagation();
        this.state.infoExpanded.gameDescripSection = !this.state.infoExpanded.gameDescripSection;
        this.setState({
            ...this.state
        });
    }
    componentDidMount(){
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
        // const randIndex = this.state.randIndex;
        console.log('props', this.props);
        const gameDescripExpand = {
            height: this.state.infoExpanded.gameDescripSection ? "auto" : "144px",
            background: this.state.infoExpanded.gameDescripSection ? "transparent" : "linear-gradient(to bottom, rgba(175,238,238,0), rgba(175,238,238,0.2))"
        };
        const expandButton = this.state.infoExpanded.gameDescripSection ? "less.." : "more..";

        // const releaseDate = Data[randIndex].release_date.slice(0, 4);

        // const { description } = Data[randIndex];
        if (!this.props.details){
            return (
                <div className="carousel-container">
                    <div className="loadingImage">
                        <img src={ferret} alt="Loading Images" />
                    </div>
                </div>
            )
        } else {
    }
        const gameDetails = this.props.details;
        return(
            
            <div className="singleGamePage">
                <div className="gameTitle">
                    <h2>{gameDetails.app_name}</h2>
                </div>
                <div className="upperDisplay">
                    <div className="gameImg">
                        <img src={gameDetails.icon_url}/>
                    </div>
                    <div className="gameDetailsTop">
                        <div>
                            {/* <div>
                                {Data[randIndex].genres}
                            </div> */}
                            <div>
                                {gameDetails.publisher_name}
                            </div>
                            <div>
                                {gameDetails.releaseDate}
                            </div>
                        </div>
                        <div className="contentRating">
                            <div>
                                Rated: {gameDetails.content_rating}
                            </div>
                            {/* <div className="ratedFor">
                                {Data[randIndex].content_rating_info}
                            </div> */}
                        </div>
                        <h4 className="price">
                                {gameDetails.price_value}
                        </h4>
                        {/* <div className="downloadCount">
                                {gameDetails.downloads} Downloads.
                        </div> */}
                        <div className="ratingStars">
                            <ReactStars count={5} size={24} color2={'#ffd700'} value={parseFloat(gameDetails.all_rating)} edit={false}/>
                        </div>
                    </div>
                </div>
                <div className="gameDetailsBottom">
                    <div className="detailsBottomInnerBox">
                        <div>
                            <div className="getItButtons">
                                <button type="button">
                                    <img src={iOS} className="iOSButton"/>
                                </button>
                                <button type="button">
                                    <img src={Android} className="androidButton"/>
                                </button>
                            </div>
                        </div>
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
                        <div>
                            <h4 className="updatesHeader">
                                Updates
                            </h4>
                            <p className="gameUpdateDate">
                                {gameDetails.status_date}
                            </p>
                            <div className="gameUpdateVersion">
                                Version: {gameDetails.version}
                            </div>
                            <p className="gameUpdateInfo">
                                {gameDetails.whats_new}
                            </p>
                        </div>
                        <div>
                            {/* <div>
                                {Data[randIndex].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div>
                            <div>
                                {Data[randIndex].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div>
                            <div>
                                {Data[randIndex].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        details: state.game.details
    }
}
export default connect(mapStateToProps, {viewDetails})(GameDetailsIndexPage);