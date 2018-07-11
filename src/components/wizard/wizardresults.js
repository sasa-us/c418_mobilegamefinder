
import Results from "../results"
import ReactStars from 'react-stars';
import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { formatPostData} from '../../helpers'
import Data from "../gamedetails/dummydata";



class WizardResults extends Component {
    constructor(props) {
        super(props);
        //data call return info should be in state
        this.state={

        }
    }

    componentDidMount() {
        this.getDataFromLocalStorage();
    }


    getDataFromLocalStorage() {
        var priceData = JSON.parse(localStorage.getItem('price'));
        var platformData = JSON.parse(localStorage.getItem('platform'));
        var genreData = JSON.parse(localStorage.getItem('genre'));

        console.log("this is the wizard data: ", priceData.price, platformData.platform, genreData.genre);

        this.setState({

        });


        const newItem = {
            genre: 'board'
            // platform:  'android',
            // price_value: 'free'
        };
        const postnewItem = formatPostData(newItem);
        // axios.get('mainpage.php', {
        axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'wizardpage'
            }
        }).then(resp => {
            console.log('POST RESPONSE:', resp);
        });

        function formatPostData(data){
            const params = new URLSearchParams();

            for(let [k, v] of Object.entries(data)){
                params.append(k, v);
            }

            return params;
        }


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

export default WizardResults;





