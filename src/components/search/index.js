import React from 'react';
import Results from "../results"
import { formatPostData} from '../../helpers'
import './search.scss';


export default props => {
    const pageText = 'Here are your search results';
    return (
        <div className="searchMain">
            <Results title='Search Results' search="angry birds" text={pageText}/>
        </div>
        
    )
}