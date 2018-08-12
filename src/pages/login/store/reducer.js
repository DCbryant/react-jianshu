import * as constans from './constans';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
    login: false
});

export default (state=defaultStore, action) => {
    switch (action.type) {
        case constans.CHANGE_LOGIN: 
            return state.set('login',action.value)
        case constans.CHANGE_LOGOUT: 
            return state.set('login',action.value)
        default:
            return state;
    }
}