import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header-bar';
import Home from './home';
import BrowseResult from './browse/resultlist';
import Wizard from './wizard/wizard2';
import WizardResults from './wizard/wizardresults';
import Search from './search';
import GameInfo from '../components/gamedetails'
import About from './about';
import Footer from './footer-bar'
// import PartialDetails from '../components/modals';




const App = () => (
        <div>
            <div>
            <Header/>

            <Route exact path="/" component={Home}/>
            <Route path="/browse/results" component={BrowseResult}/>
            <Route path="/wizard" component={Wizard}/>
            <Route path="/wizardresults" component={WizardResults}/>
            <Route exact path="/search" component={Search}/> 
            <Route path="/about" component={About}/>
            <Route path="/search/results" component={Search}/>
            <Route path="/search/gamedetails" component={GameInfo}/>

            </div>

            <div>
            <Footer/>
            </div>

        </div>


        
);

export default App;
