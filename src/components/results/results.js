import React, {Component} from "react";
import GameTile from "../../assets/images/results/download.jpg";
import ReactStars from 'react-stars';
import "./results.scss";
import Data from "../gamedetails/dummydata";

class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(

            <div className="resultsContainer">

                <div className="resultsIcons">

                    <h3 className='resultsGreeting'>Your search results...</h3>

                    <div className="resultsRow">
                        <div className="icon">
                            <img className="result_icon" src ={Data[1].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[1].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[2].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[2].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[3].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[3].app_name}</div>
                        </div>
                    </div>

                    <div className="resultsRow">
                        <div className="icon">
                            <img className="result_icon" src ={Data[4].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[4].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[5].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[5].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[6].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[6].app_name}</div>
                        </div>
                    </div>

                    <div className="resultsRow">
                        <div className="icon">
                            <img className="result_icon" src ={Data[7].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[7].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[8].icon_url}/>
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[8].app_name}</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={Data[9].icon_url} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">{Data[9].app_name}</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Results