import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
import Data from '../gamedetails/dummydata';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {searchResults} from '../../actions/';
import ferret from '../../assets/images/ferretgif.gif';

class SearchResults extends Component {


    componentDidMount(){
        const search_term = new URLSearchParams(this.props.location.search).get('search_term');
        this.props.searchResults(search_term);
    }
    componentWillReceiveProps(newProps){
        const search_term = new URLSearchParams(newProps.location.search).get('search_term');
        this.props.searchResults(search_term);
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
            console.log('loaded search');
    }
    const data = this.props.gamelist.data;
        return (
            <div className="resContainer">
                <h2>{this.props.title}</h2>
                <GeneralText text={this.props.text} />
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
        gamelist: state.search.gamelist
    }
}
export default connect(mapStateToProps, {searchResults})(SearchResults);
