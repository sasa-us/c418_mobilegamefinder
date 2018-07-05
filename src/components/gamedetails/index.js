import React, {Component} from 'react';
import ReactStars from 'react-stars';
import Data from './dummydata';
import iOS from '../../assets/images/iOS/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import Android from '../../assets/images/android/google-play-badge.png';
import './gamedetails.scss';

class GameDetailsIndexPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            infoExpanded: {
                gameDescripSection: false
            }
        };
    };

    toggleDescriptionExpand(event){
        event.stopPropagation();

        this.state.infoExpanded.gameDescripSection = !this.state.infoExpanded.gameDescripSection;

        this.setState({
            ...this.state
        });
    }

    render(){
        const gameDescripExpand = {
            height: this.state.infoExpanded.gameDescripSection ? "auto" : "144px",
            background: this.state.infoExpanded.gameDescripSection ? "transparent" : "linear-gradient(to bottom, rgba(175,238,238,0), rgba(175,238,238,0.2))"
        };
        const expandButton = this.state.infoExpanded.gameDescripSection ? "less.." : "more..";
        const releaseDate = Data[3].release_date.slice(0, 4);

        //-------------------------------Description Data Format Conversion---------------------------------
        const descripParsed = Data[3].description.split('<br>');

        const filterDescrip = (string)  => {
            if(string === ""){
                    return false;
                } else {
                    return true;
                }
        }
        const descripFiltered = descripParsed.filter(filterDescrip)

        const parseDescrip = (string, index) => {
            return(
                <p key={index}>{string}</p>
            )
        }
        const formattedDescription = descripFiltered.map(parseDescrip);
        //----------------------------------------------------------------------------------------------------
        
        return(
            <div className="singleGamePage">
                <div className="gameTitle">
                    <h2>{Data[3].app_name}</h2>
                </div>
                <div className="upperDisplay">
                    <div className="gameImg">
                        <img src={Data[3].icon_url}/>
                    </div>
                    <div className="gameDetailsTop">
                        <div>
                            {/* <div>
                                {Data[3].genres}
                            </div> */}
                            <div>
                                {Data[3].publisher_name}
                            </div>
                            <div>
                                {releaseDate}
                            </div>
                        </div>
                        
                        <div className="contentRating">
                            <div>
                                {Data[3].content_rating}
                            </div>
                            <div className="ratedFor">
                                {Data[3].content_rating_info}
                            </div>
                        </div>
                        <div>
                            <h4 className="price">
                                {Data[3].price}
                            </h4>
                            <div className="getItButtons">
                                {/* <button type="button">
                                    <img src={iOS} className="iOSButton"/>
                                </button> */}
                                <button type="button">
                                    <img src={Android} className="androidButton"/>
                                </button>
                            </div>
                            <div className="downloadCount">
                                {Data[3].downloads} Downloads.
                            </div>
                        </div>
                        <div className="ratingStars">
                            <ReactStars count={5} size={24} color2={'#ffd700'} value={Data[3].all_rating} edit={false}/>
                        </div>
                        
                    </div>
                </div>
                <div className="gameDetailsBottom">
                    <div className="detailsBottomInnerBox">
                        <h4 className="descripHeader">
                            Description
                        </h4>
                        <div className="gameDescripOuterBox">
                            <div className="gameDescrip" style={gameDescripExpand}>
                                {formattedDescription}
                            </div>
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
                                {Data[3].status_date}
                            </p>
                            <div className="gameUpdateVersion">
                                Version: {Data[3].version}
                            </div>
                            <p className="gameUpdateInfo">
                                {Data[3].whats_new}
                            </p>
                        </div>
                        <div>
                            {/* <div>
                                {Data[3].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div>
                            <div>
                                {Data[3].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div>
                            <div>
                                {Data[3].related.related_apps[Math.floor(Math.random() * 100)]}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameDetailsIndexPage;