import types from './types';
import axios from 'axios';
import { formatPostData} from '../../src/helpers';

export function viewDetails(gameid){
    // const params = new URLSearchParams();
    // params.append('searchrequest', gameid);
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
    // const params = new URLSearchParams();
    // params.append('searchrequest', terms);
    // const resp = axios.post('/api/post_searchpage.php', params);
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
