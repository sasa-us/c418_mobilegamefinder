import types from '../actions/types';

const DEFAULT_STATE = {
    gamelist: null,
    details: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SEARCH_RESULTS:
        console.log('search reducer ran', action)
            return {...state, gamelist: action.payload.data};
        default:
            return state;
    }
}