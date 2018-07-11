
import Results from "../results"
import ReactStars from 'react-stars';
import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { formatPostData} from '../../helpers'
import GeneralText from '../multiuse/generaltext';
import '../results/results.scss';
import GameComponent from '../results/gamecomponent';
import {wizardResults} from '../../actions/';
import {connect} from 'react-redux';
import ferret from '../../assets/images/ferretgif.gif';
import Data from "../gamedetails/dummydata";



class WizardResults extends Component {
    constructor(props) {
        super(props);
        //data call return info should be in state
        // this.state={
        // }
    }

    componentDidMount() {
        this.getDataFromLocalStorage();
    }


    getDataFromLocalStorage() {
        var priceData = JSON.parse(localStorage.getItem('price'));
        var platformData = JSON.parse(localStorage.getItem('platform'));
        var genreData = JSON.parse(localStorage.getItem('genre'));

        console.log("this is the wizard data: ", priceData.price, platformData.platform, genreData.genre);
        const newItem = {
            genre: genreData.genre,
            platform:  platformData.platform,
            price_value: priceData.price
        };
        this.props.wizardResults(newItem)
    }


    render() {
        if (!this.props.wizard){
            return (
                <div className="carousel-container">
                    <div className="loadingImage">
                        <img src={ferret} alt="Loading Images" />
                    </div>
                </div>
            )
        } else {
            console.log('loaded');
            console.log('props', this.props)
    }
    const data = this.props.wizard.data;
    const text = 'Based on your choices, we think you would enjoy these games.';
        return (
            <div className="resContainer">
                <h2>Our Recommendations</h2>
                <GeneralText text={text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('REDUX STATE:', state);
    return {
        wizard: state.wizard.wizardresults
    }
}
export default connect(mapStateToProps, {wizardResults})(WizardResults);





