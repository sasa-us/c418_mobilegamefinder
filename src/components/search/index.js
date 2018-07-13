import React, {Component} from 'react';
import Results from "../results"
import { formatPostData} from '../../helpers'
import './search.scss';


class SearchResults extends Component {

    componentDidMount(){
        const search_term = new URLSearchParams(this.props.location.search).get('search_term');
    }
    componentWillReceiveProps(newProps){
        const search_term = new URLSearchParams(newProps.location.search).get('search_term');
    }

    render(){
        const pageText = 'Here are your search results';
        return (
            <div>
                <Results title='Search Results' search={this.search_term} text={pageText}/>
            </div>
        )
    }
}
export default SearchResults;
