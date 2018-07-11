import types from '../actions/types';

const DEFAULT_STATE = {
    wizardresults: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.WIZARD_RESULTS:
        console.log('wizard reducer ran', action)
            return {...state, wizardresults: action.payload.data};
        default:
            return state;
    }
}