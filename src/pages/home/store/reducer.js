import { fromJS } from 'immutable';
import * as constans from './constans';

const defaultStore = fromJS({
   topicList: [],
   articleList: [],
   recommendList: [],
   articlePage: 1,
   showScroll: false
});

export default (state=defaultStore, action) => {
    switch (action.type) {
        case constans.CHANGE_HOME_DATA :
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            })
        case constans.ADD_HOME_LIST :
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage,
            })
        case constans.TOGGLE_SCROLL_TOP :
            return state.set('showScroll', action.show)
        default:
            return state;
    }
}