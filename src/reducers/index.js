import { combineReducers } from 'redux';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';
import wizardReducer from './wizardreducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    game: gameReducer,
    search: searchReducer,
    wizard: wizardReducer,
    modal: modalReducer
});
export default rootReducer;