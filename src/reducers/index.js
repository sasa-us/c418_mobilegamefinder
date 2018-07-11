import { combineReducers } from 'redux';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';
import wizardReducer from './wizardreducer';

const rootReducer = combineReducers({
    game: gameReducer,
    search: searchReducer,
    wizard: wizardReducer
});
export default rootReducer;