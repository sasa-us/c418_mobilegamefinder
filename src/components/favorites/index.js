import React, {Component} from 'react';
import Favorites from './favorites';
import './results.scss';
import GeneralText from '../multiuse/generaltext';
import {connect} from 'react-redux';
import {searchResults, returnFavorites} from '../../actions/';
import ferret from '../../assets/images/ferretgif.gif';

class FavoritesList extends Component {


    componentDidMount(){
        this.props.returnFavorites("1");
    }


    render(){
        console.log("props", this.props.favorites);
        // if (!this.props.gamelist){
        //     return (
        //         <div className="carousel-container">
        //             <div className="loadingImage">
        //                 <img src={ferret} alt="Loading Images" />
        //             </div>
        //         </div>
        //     )
    // }
    const data = this.props.favorites;
    console.log("data", data);
         return (
            <div className="resContainer">
                {/*<h2>{data.app_name}</h2>*/}
                <div className="detailContainer">
                    {data.map(game => <Favorites key={game.game_id} details={game}/>)}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        favorites: state.favorite.favorites
    }
}
export default connect(mapStateToProps, {searchResults, returnFavorites})(FavoritesList);
