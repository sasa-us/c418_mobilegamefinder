import { combineReducers } from 'redux';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';
import wizardReducer from './wizardreducer';
import browseReducer from './browsereducer';

const rootReducer = combineReducers({
    game: gameReducer,
    search: searchReducer,
    wizard: wizardReducer,
    browse: browseReducer
});
export default rootReducer;