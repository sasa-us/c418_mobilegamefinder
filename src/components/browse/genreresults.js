import React, {Component} from 'react';
import GameComponent from '../results/gamecomponent';
import '../results/results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {browseResults} from '../../actions/';
import ferret from '../../assets/images/ferretgif.gif';

class GenreResultsList extends Component {

    componentDidMount(){
        this.getData();
    }
    getData() {
        console.log("this is the browse data: ", this.props.match.params.genre);
        const newItem = {
            genre: this.props.match.params.genre,
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
    const genreName = this.props.match.params.genre;
    const text = 'Here are some games we think you would like!';
        return (
            <div className="resContainer">
                <h2 className="titleLabel">{`${genreName} Games`}</h2>
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
export default connect(mapStateToProps, {browseResults})(GenreResultsList);
