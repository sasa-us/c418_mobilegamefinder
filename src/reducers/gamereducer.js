import types from '../actions/types';

const DEFAULT_STATE = {
    details: {}
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.VIEW_DETAILS:
            return {...state, details: action.payload.data.data[0]};
        default:
            return state;
    }
}