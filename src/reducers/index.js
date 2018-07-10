import { combineReducers } from 'redux';
import gameReducer from './gamereducer';

const rootReducer = combineReducers({
    game: gameReducer
});
export default rootReducer;