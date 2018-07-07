import React from 'react';
import Results from "../results"

export default props => {
    const pageText = 'Based on your selections, here are some games we think you would like.';
    return (
        <div>
            <Results title='Our Recommendations' text={pageText}/>
        </div>
        
    )
}