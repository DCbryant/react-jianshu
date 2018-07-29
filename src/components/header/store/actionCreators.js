import axios from 'axios';
import * as constans from './constans';
import { fromJS } from 'immutable';

const  changeList = (data) => ({
    type: constans.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});

export const  searchFocus = () => ({
    type: constans.SEARCH_FOCUS
});


export const  searchBlur = () => ({
    type: constans.SEARCH_BLUR
});

export const  mouseEnter = () => ({
    type: constans.MOUSE_ENTER
});

export const  mouseLeave = () => ({
    type: constans.MOUSE_LEAVE
});

export const  pageChange = (page) => ({
    type: constans.PAGE_CHANGE,
    page
});


export const  getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(err => {
            console.log(err);
        })
    }
};