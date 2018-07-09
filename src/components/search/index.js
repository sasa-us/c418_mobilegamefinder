import React from 'react';
import Results from "../results"
import { formatPostData} from '../../helpers'


export default props => {
    const pageText = 'Here are your search results';
    return (
        <div>
            <Results {...props} title='Search Results' text={pageText}/>
        </div>
        
    )
}