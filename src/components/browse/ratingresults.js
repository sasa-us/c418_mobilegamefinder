import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {browseResults} from '../../actions/';
import ferret from '../../assets/images/ferretgif.gif';

class RatingResultsList extends Component {

    componentDidMount(){
        this.getDataFromLocalStorage();
    }
    getDataFromLocalStorage() {
        // var ratingData = JSON.parse(localStorage.getItem('rating'));
        // console.log("this is the rating data: ", ratingData.rating);
        const newItem = {
            all_rating: 5,
        };
        this.props.browseResults(newItem)
    }
    
    render(){
        if (!this.props.browseresult){
            return (
                <div className="carousel-container">
                    <div className="loadingImage">
                        <img src={ferret} alt="Loading Images" />
                    </div>
                </div>
            )
        }
    const data = this.props.browseresult.data;
    // const priceType = JSON.parse(localStorage.getItem('rating'));
    const text = 'Here are some results we think you would like!';
    console.log('data', data);
        return (
            <div className="resContainer">
                <h2 className="titleLabel">{`5 Star Games`}</h2>
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
        browseresult: state.browse.browseresult
    }
}
export default connect(mapStateToProps, {browseResults})(RatingResultsList);
