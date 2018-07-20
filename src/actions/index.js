import types from './types';
import axios from 'axios';
import { formatPostData } from '../helpers';

//what is address for doing call for BASE_URL?

const BASE_URL = '/api/gameapp.php';

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
            const postnewItem = formatPostData(userInfo);
            console.log("postnew item? ", postnewItem);
            const resp = await axios.post('/api/gameapp.php', postnewItem, {
                params: {
                    action: 'signup'
                }
            });
            console.log("resp?", resp);

            localStorage.setItem("username", resp.data.user.username);

            dispatch ({
                type: types.SIGN_UP,
                user: resp.data.user
            });
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

        localStorage.setItem("username", resp.data.user.username);
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
    localStorage.removeItem('username');
    console.log(localStorage);
    return{type: types.SIGN_OUT};
}

export function saveFavorite(userID, gameID) {
    const newItem = {
        user_id: userID,
        game_id: gameID
    };
    const postnewItem = formatPostData(newItem);
    const resp = axios.post('/api/gameapp.php', postnewItem, {
        params: {
            action: 'savefavorite'
        }
    });
    console.log('save favorites:', resp);
    return {
        type: types.SEND_FAVORITE,
        payload: resp
    }
}

export function returnFavorites(userID) {
    const newItem = {
        user_id: userID,
    };

    const postnewItem = formatPostData(newItem);
    const resp = axios.post('/api/gameapp.php', postnewItem, {
        params: {
            action: 'returnfavorite'
        }
    });
    console.log('return favorites:', resp)
    return {
        type: types.FAVORITE_RESULTS,
        payload: resp
    }

}