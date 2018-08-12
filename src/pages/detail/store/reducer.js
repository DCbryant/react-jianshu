import { fromJS } from 'immutable';
import * as constans from './constans';


const defaultStore = fromJS({
   title: '',
   content: ''
});

export default (state=defaultStore, action) => {
    switch (action.type) {
        case constans.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content,
            })
        default:
            return state;
    }
}