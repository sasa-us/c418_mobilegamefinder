import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gameReducer from './gamereducer';
import searchReducer from './searchreducer';
import wizardReducer from './wizardreducer';
import modalReducer from './modalReducer';
import browseReducer from './browsereducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    game: gameReducer,
    search: searchReducer,
    wizard: wizardReducer,
    modal: modalReducer,
    browse: browseReducer,
    user: userReducer
});
export default rootReducer;
