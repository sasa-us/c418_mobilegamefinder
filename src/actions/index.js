import types from './types';
import axios from 'axios';

export function viewDetails(gameid){
    const params = new URLSearchParams();
    params.append('searchrequest', gameid);
    const resp = axios.post('api/post_detailspage.php', params)
    return {
        type: types.VIEW_DETAILS,
        payload: resp
    }
}