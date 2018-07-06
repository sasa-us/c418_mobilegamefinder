import React from 'react';
import Results from "../results"

export default props => {
    const pageText = 'Here are your search results';
    return (
        <div>
            <Results title='Search Results' text={pageText}/>
        </div>
        
    )
}