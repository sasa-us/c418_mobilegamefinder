import React, {Component} from "react";
import GameTile from "../../assets/images/results/download.jpg";
import ReactStars from 'react-stars';
import "./results.scss";

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
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>
                    </div>

                    <div className="resultsRow">
                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>
                    </div>

                    <div className="resultsRow">
                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>

                        <div className="icon">
                            <img className="result_icon" src ={GameTile} />
                            <ReactStars count={5} size={14} color2={'#ffd700'} value={5} edit={false}/>
                            <div className="resultsTitle">Title</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default Results