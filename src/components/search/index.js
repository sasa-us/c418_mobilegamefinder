import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
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
        if(newProps.location.search === this.props.location.search){
            return;
        } else {
        const search_term = new URLSearchParams(newProps.location.search).get('search_term');
        this.props.searchResults(search_term);
        }
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
        }
        const data = this.props.gamelist.data;
        const text = 'Here are your search results!';
        return (
            <div className="resContainer">
                <h2>Search Results</h2>
                <GeneralText text={text} />
                <div className="detailContainer">
                    {data.map(game => <GameComponent key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        gamelist: state.search.gamelist
    }
}
export default connect(mapStateToProps, {searchResults})(SearchResults);
