import React from 'react';
import ReactStars from 'react-stars'




export default props => {
    console.log('gamecomponent props', props);
    const ratingChanged = (newRating) => {
        //   console.log(newRating)
        };
    return (
        <div className="recItem">
            <img src={props.details.icon_url} alt={props.details.name} />
            <ReactStars count={5} size={24} color2={'#ffd700'} value={props.details.all_rating} edit={false}/>
            <h4>{props.details.app_name}</h4>
        </div>
    )
}