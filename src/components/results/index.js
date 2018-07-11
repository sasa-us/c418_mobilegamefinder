import React, {Component} from 'react';
import GameComponent from './gamecomponent';
import './results.scss';
import Data from '../gamedetails/dummydata';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {searchResults} from '../../actions/';
import ferret from '../../assets/images/ferretgif.gif';

class ResultsList extends Component {


    componentDidMount(){
        console.log("search", this.props.search)
        this.getResultData(this.props.search);
    }
    getResultData(){
        this.props.searchResults(this.props.search);
       
    }

    render(){
        if (!this.props.gamelist){
            return (
                <div className="carousel-container">
                    <div className="loadingImage">
                        <img src={ferret} alt="Loading Images" />
                    </div>
                </div>
            )
        } else {
            console.log('loaded');
            console.log('props', this.props.gamelist)
    }
    const data = this.props.gamelist.data;
    console.log("Data", data);
        return (
            <div className="resContainer">
                <h2>{this.props.title}</h2>
                <GeneralText text={this.props.text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
                <h1>test header</h1>
            </div>
        )
    }
}


function mapStateToProps(state){
    console.log('REDUX STATE:', state);
    return {
        gamelist: state.search.gamelist
    }
}
export default connect(mapStateToProps, {searchResults})(ResultsList);
