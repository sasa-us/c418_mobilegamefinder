import React from 'react';
import './gamedetails.scss';

export default ()=> {
    return (
    <div className="singleGamePage">
        <div className="gameTitle">
            <h2>app_name</h2>
        </div>
        <div className="upperDisplay">
            <div className="gameImg">
                icon_url
            </div>
            <div className="gameDetailsTop">
                <p>
                    <div>
                        genre_id
                    </div>
                    <div>
                        publisher_name
                    </div>
                    <div>
                        release_date
                    </div>
                </p>
                
                <p>
                    <div>
                        content_rating
                    </div>
                    <div>
                        content_rating_info
                    </div>
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
                    <div>
                        all_rating
                    </div>
                    <div>
                        downloads
                    </div>
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
                <div>
                    status_date
                </div>
                <div>
                    version
                </div>
                <div>
                    whats_new
                </div>
            </p>
            <p>
                related.related_apps
            </p>
        </div>
    </div>
    );
}