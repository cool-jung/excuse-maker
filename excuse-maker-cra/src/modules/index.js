import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import excues from './excuse';
import ui from './ui';

export default combineReducers({
    excues,
    ui,
    pender: penderReducer
});