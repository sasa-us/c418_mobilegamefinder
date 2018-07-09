import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Wizard from './wizard'
import Platform from './platform'

class Wizard extends Component {
    constructor(props) {
        super(props);
    }

    setPrice(price){
        this.setState({price});
    }

    setPlatform(platform) {
        this.setState({platform});
    }

    setGenre(genre) {
        this.setState({genre})
    }


    render(){
        return(
        <div>
            <Route path="/wizard/price" render={ props => {
                return <Wizard {...props} handleIconClick={this.setPrice.bind(this)}/>
            }}/>
            <Route path="/wizard/platform" render={ props => {
                return <Wizard {...props} handleIconClick={this.setPlatform.bind(this)}/>
            }}/>

            <Route path="/wizard/genre" render={ props => {
                return <Wizard {...props} handleIconClick={this.setGenre.bind(this)}/>
            }}/>

        </div>
        )
    }
}