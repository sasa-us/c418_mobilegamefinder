import types from '../actions/types';

const DEFAULT_STATE = {
    firstModal: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.TRIGGER_MODAL:
            return {...state, firstModal: action.payload};
        case types.CLEAR_MODAL:
                return {...state, firstModal: action.payload};
        default:
            return state;
    }
}