import axios from 'axios'
import * as constans from './constans'
import {fromJS} from 'immutable';


const addHomeList = (list, nextPage) => ({
    type: constans.ADD_HOME_LIST,
    list: fromJS(list),
    nextPage
})

const toggleTopShow = (show) => ({
    type: constans.TOGGLE_SCROLL_TOP,
    show
})

const changeHomeData = (result) => ({
    type: constans.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList                ,
    recommendList: result.recommendList
})

const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/homeData.json').then(res => {
            const result = res.data.data
            const action = changeHomeData(result)
            dispatch(action)
        })
    }
}

const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        })
    }
}

export {
    getHomeInfo,
    getMoreList,
    toggleTopShow
}
