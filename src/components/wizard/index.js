import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Wizard from './wizard'
import { formatPostData} from '../../helpers'


class WizardResults extends Component {
    constructor(props) {
        super(props);
        this.state={
            genre:"",
            platform:"",
            price_value:""
        }
    }

    componentDidMount() {
        this.getDataFromLocalStorage;
    }


    getDataFromLocalStorage() {
        var priceData = JSON.parse(localStorage.getItem('price'));
        var platformData = JSON.parse(localStorage.getItem('platform'));
        var genreData = JSON.parse(localStorage.getItem('genre'));

        console.log("wizard data: ", priceData.price, platformData.platform, genreData.genre);

        this.setState({
            price: priceData.price,
            platform: platformData.platform,
            genre: genreData.genre
        });


        const newItem = {
            genre: 'board',
            platform:  'android',
            price_value: 'free'
        };
        const postnewItem = formatPostData(newItem);
        // axios.get('mainpage.php', {
        axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'wizardpage'
            }
        }).then(resp => {
            console.log('POST RESPONSE:', resp);
        });

        function formatPostData(data){
            const params = new URLSearchParams();

            for(let [k, v] of Object.entries(data)){
                params.append(k, v);
            }

            return params;
        }


    }


    render() {
        console.log("state: ", this.state)
        return <div>it worked</div>
    }
}






