import React, {Component} from 'react';
import axios from 'axios';
import GameComponent from './gamecomponent';
import {formatPostData} from '../../helpers';
import './results.scss';
import Data from '../gamedetails/dummydata';
import GeneralText from '../multiuse/generaltext';

class Results extends Component{
    constructor(props){
        super(props);

    
    }

    componentDidMount(){

        const search_term = new URLSearchParams(this.props.location.search).get('search_term')

        axios.post('/api/gameapp.php', formatPostData({
            search_term
        }), {
            params: {
                action: 'search'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }

    componentWillReceiveProps(newProps){

        const search_term = new URLSearchParams(newProps.location.search).get('search_term')

        axios.post('/api/gameapp.php', formatPostData({
            search_term
        }), {
            params: {
                action: 'search'
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }

    render(){
        const genText = this.props.text;

        return (
            <div className="resContainer">
                <h2>{this.props.title}</h2>
                <GeneralText text={genText} />
                <div className="detailContainer">
                    <GameComponent details={Data[0]}/>
                    <GameComponent details={Data[1]}/>
                    <GameComponent details={Data[2]}/>
                    <GameComponent details={Data[3]}/>
                    <GameComponent details={Data[4]}/>
                    <GameComponent details={Data[5]}/>
                    <GameComponent details={Data[6]}/>
                    <GameComponent details={Data[7]}/>
                    <GameComponent details={Data[8]}/>
                </div>
            </div>
        )
    }
}

export default Results;