import types from './types';
import axios from 'axios';
import { formatPostData} from '../../src/helpers';

export function viewDetails(gameid){
    const newItem = {searchrequest: gameid};
    const postItem = formatPostData(newItem);
    const resp = axios.post('/api/gameapp.php', postItem, {
        params: {
            action: 'details'
        }
    })
    return {
        type: types.VIEW_DETAILS,
        payload: resp
    }
}
export function searchResults(terms){
    const newItem = {
        search_term: terms
    };
    const postItem = formatPostData(newItem);
    const resp = axios.post('/api/gameapp.php', postItem, {
        params: {
            action: 'search'
        }
    })
    return {
        type: types.SEARCH_RESULTS,
        payload: resp
    }
}
export function wizardResults(results){
    const postnewItem = formatPostData(results);
    const resp = axios.post('/api/gameapp.php', postnewItem, {
        params: {
            action: 'wizardpage'
        }
    })
    return {
        type: types.WIZARD_RESULTS,
        payload: resp
    }
}
export function browseResults(terms){
    const newItem = {
        //all_rating: ‘5’,
        //genre:  ‘board’,
        //price_value: ‘paid’
        // price_value: 'free'
    };
    const postnewItem = formatPostData(terms);
    const resp = axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'browse'
            }
    })
    return {
        type: types.BROWSE_RESULTS,
        payload: resp
    }
}