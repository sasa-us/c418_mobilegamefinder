import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header-bar';
import Home from './home';
import Browse from './browse';
import Wizard from './wizard/price';
import Platform from "./wizard/platform";
import Genre from "./wizard/genre";
import Search from './search';
import GameInfo from '../components/gamedetails'
import About from './about';
import Footer from './footer-bar'
import Recommendations from './recommendations'




const App = () => (
        <div>
            <div>
            <Header/>

            <Route exact path="/" component={Home}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/wizard" component={Wizard}/>
            <Route path="/platform" component={Platform}/>
                <Route path="/genre" component={Genre}/>
            <Route exact path="/search" component={Search}/>
            <Route path="/about" component={About}/>
            <Route path="/recommendations" component={Recommendations}/>
            <Route path="/search/gamedetails" component={GameInfo}/>

            </div>

            <div>
            <Footer/>
            </div>

        </div>


        
);

export default App;
