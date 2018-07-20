import React, {Component} from 'react';
import ReactStars from 'react-stars'
import '../modals/modal.scss'
import '../gamedetails/gamedetails.scss'
import {Link} from 'react-router-dom';


class Favorites extends Component {
    constructor () {
        super();
        this.state = {

        };

    }

    render(){

        return (
            <div className="resItem">
                <div className='gameBlock'>
                    <img className='resItemImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                    <ReactStars count={5} size={24} color2={'#ffd700'} value={parseFloat(this.props.details.all_rating)} edit={false}/>
                    <h4>{this.props.details.app_name}</h4>
                </div>
            </div>
        )
    }
}
export default Favorites;