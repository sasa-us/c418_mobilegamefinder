import types from '../actions/types';

const DEFAULT_STATE = {
    wizardresults: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.WIZARD_RESULTS:
            return {...state, wizardresults: action.payload.data};
        default:
            return state;
    }
}