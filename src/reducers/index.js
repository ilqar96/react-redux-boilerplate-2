import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import postReducer from './postReduces';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:isLoggedReducer,
    posts:postReducer,
})

export default allReducers;
