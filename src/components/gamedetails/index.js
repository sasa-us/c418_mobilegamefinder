import React from 'react';
import dummyData from './dummydata';
import './gamedetails.scss';

export default ()=> {
    
    return (
    <div className="singleGamePage">
        <div className="gameTitle">
            <h2>app_name</h2>
        </div>
        <div className="upperDisplay">
            <div className="gameImg">
                <img src={dummyData[3].icon_url}/>
            </div>
            <div className="gameDetailsTop">
                <p>
                    <span>
                        genre_id
                    </span>
                    <span>
                        publisher_name
                    </span>
                    <span>
                        release_date
                    </span>
                </p>
                
                <p>
                    <span>
                        content_rating
                    </span>
                    <span>
                        content_rating_info
                    </span>
                </p>
                <div className="getItButtons">
                    <button type="button">
                        price
                    </button>
                    <button type="button">
                        price
                    </button>
                </div>
                <p>
                    <span>
                        all_rating
                    </span>
                    <span>
                        downloads
                    </span>
                </p>
            </div>
        </div>
        <div className="gameDetailsBottom">
            <h4>
                Summary
            </h4>
            <p>
                description
            </p>
            <p>
                <span>
                    status_date
                </span>
                <span>
                    version
                </span>
                <span>
                    whats_new
                </span>
            </p>
            <p>
                related.related_apps
            </p>
        </div>
    </div>
    );
}