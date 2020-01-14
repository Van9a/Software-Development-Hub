import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducer';
import { AppActionTypes } from './constants';

const combinedReducers = combineReducers({
    form: formReducer,
    appReducer,

});

let store = createStore(combinedReducers);
window.store = store;

export 
