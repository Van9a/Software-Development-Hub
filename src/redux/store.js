import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';


const rootReducer = combineReducers({
    appReducer,
    form: formReducer
});

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
