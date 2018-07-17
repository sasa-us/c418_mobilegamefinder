import { combineReducers } from 'redux';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';
import wizardReducer from './wizardreducer';
import modalReducer from './modalReducer';
import browseReducer from './browsereducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    game: gameReducer,
    search: searchReducer,
    wizard: wizardReducer,
    modal: modalReducer,
    browse: browseReducer,
    user: userReducer
});
export default rootReducer;