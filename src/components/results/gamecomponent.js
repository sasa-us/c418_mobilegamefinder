import React from 'react';
import ReactStars from 'react-stars'
import Modal from '../modals';



export default props => {
    // console.log('gamecomponent props', props);
    const ratingChanged = (newRating) => {
        //   console.log(newRating)
        };
    return (
        <div className="resItem">
            <img className='resItemImg' src={props.details.icon_url} alt={props.details.name} />
            <ReactStars count={5} size={24} color2={'#ffd700'} value={props.details.all_rating} edit={false}/>
            <Modal name={props.details.app_name} img={props.details.icon_url} rating={props.details.all_rating} description={props.details.description} price={props.details.price} />
        </div>
    )
}