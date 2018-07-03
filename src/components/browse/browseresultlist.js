import React from 'react';
import {Route, Link} from 'react-router-dom';
import GameInfo from '../gamedetails';

export default (props) => {
    return (
        <div>
            <h1>Category Result Page</h1>
            <Link to="/browse/category/game-details"><h2>Game Name - links to Game Details</h2></Link>
            <Route path="/browse/category/game-details" component={GameInfo} />   
        </div>
        
    )
}

// import React from 'react';
// import {Route, Link} from 'react-router-dom';
// import BrowseResults from './browseresultlist';

// export default (props) => {
//     return (
//         <div> 
            
//             <Link to="/category"><h2>Category Name - links to Category Search</h2></Link>
//             <Route path="/category" component={BrowseResults}/>
//         </div>
        
//     )
// }