import types from '../actions/types';

const DEFAULT_STATE = {
    gamelist: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SEARCH_RESULTS:
            return {...state, gamelist: action.payload.data};
        default:
            return state;
    }
}