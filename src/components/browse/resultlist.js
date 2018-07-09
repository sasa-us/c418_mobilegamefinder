import React from 'react';
import Results from "../results"

export default props => {
    const pageText = 'Here are your browse results';
    return (
        <div>
            <Results title='Browse Results' data='' text={pageText}/>
        </div>
        
    )
}