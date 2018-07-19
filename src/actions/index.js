import types from './types';
import axios from 'axios';
import { formatPostData } from '../helpers';

//what is address for doing call for BASE_URL?

const BASE_URL = 'http://api.reactprototypes.com';

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
export function triggerModal(text){
    return {
        type: types.TRIGGER_MODAL,
        payload: text
    }
}
export function clearModal(){
    return {
        type: types.CLEAR_MODAL,
        payload: null
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

export function createAccount(userInfo){
    return async (dispatch) => {
        try {
            const resp = await axios.post(`${BASE_URL}/signup`, userInfo);

            localStorage.setItem("token", resp.data.token);

            dispatch ({type: types.SIGN_UP});
        } catch(err) {
            console.log('SIGN UP ERROR:', err.message);
        }
    }
}

export function accountSignIn(userInfo){
    return async dispatch => {

        const postnewItem = formatPostData(userInfo);

        const resp = await axios.post('/api/gameapp.php', postnewItem, {
            params: {
                action: 'login'
            }
        });

        console.log('Sign In Resp:', resp);
        if(resp.data.success){
            return dispatch({
                type: types.SIGN_IN,
                user: resp.data.user
            });
        }

        dispatch({
            type: types.AUTH_ERROR,
            error: resp.data.error
        });

        throw new Error('Invalid login information');
    }
}

export function signOut(){
    localStorage.removeItem('token');
    console.log(localStorage);
    return{type: types.SIGN_OUT};
}
