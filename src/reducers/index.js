import { combineReducers } from 'redux';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';

const rootReducer = combineReducers({
    game: gameReducer,
    search: searchReducer
});
export default rootReducer;