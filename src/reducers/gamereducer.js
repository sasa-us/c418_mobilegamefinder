import types from '../actions/types';

const DEFAULT_STATE = {
    details: null,
    errors: null
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.VIEW_DETAILS:
            if(!action.payload.data.data[0].related_game_apps){
                return {
                    ...state, 
                    details: action.payload.data.data[0],
                    errors: "No related games available"
                }
            }
            return {...state, details: action.payload.data.data[0]};
        default:
            return state;
    }
}