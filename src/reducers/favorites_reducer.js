import types from "../actions/types";

const DEFAULT_STATE = {
    favorites: []
};

export default (state = DEFAULT_STATE, action)=> {
    switch (action.type){
        case types.SEND_FAVORITE:
            return {...state, favorites: action.payload.data};
        case types.FAVORITE_RESULTS:
            console.log("favorites", action.payload.data)
            return {...state, favorites: action.payload.data.data};


        default:
            return state;
    }
}