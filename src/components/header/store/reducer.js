import * as constans from './constans';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

export default (state=defaultStore, action) => {
    switch (action.type) {
        case constans.SEARCH_FOCUS:
            return state.set('focused',true);
        case constans.SEARCH_BLUR:
            return state.set('focused',false);
        case constans.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
            // return state.set('list',action.data)
            //             .set('totalPage',action.totalPage);
        case constans.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constans.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constans.PAGE_CHANGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}