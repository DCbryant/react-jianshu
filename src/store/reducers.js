import { combineReducers } from 'redux-immutable';
import {reducer as HeaderReducer} from '../components/header/store';

export default combineReducers({
    header: HeaderReducer,
});