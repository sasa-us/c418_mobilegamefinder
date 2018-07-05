import React, {Component} from 'react';
import Data from './dummydata';
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
                        
                        <div>
                            <div>
                                {Data[3].content_rating}
                            </div>
                            <div className="ratedFor">
                                {Data[3].content_rating_info}
                            </div>
                        </div>
                        <div>
                            <div className="getItButtons">
                                <button type="button">
                                    {Data[3].price}
                                </button>
                                <button type="button">
                                    {Data[3].price}
                                </button>
                            </div>
                            <div className="downloadCount">
                                {Data[3].downloads} Downloads.
                            </div>
                        </div>
                        <div>
                            {Data[3].all_rating}
                        </div>
                    </div>
                </div>
                <div className="gameDetailsBottom">
                    <div className="detailsBottomInnerBox">
                        <h4 className="summaryHeader">
                            Summary
                        </h4>
                        <div className="gameDescripOuterBox">
                            <p className="gameDescrip" style={gameDescripExpand}>
                                {Data[3].description}
                            </p>
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