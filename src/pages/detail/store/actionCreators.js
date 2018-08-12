import axios from 'axios'
import * as constans from './constans';

const changeDetail = (title, content) => ({
    type: constans.CHANGE_DETAIL,
    title,
    content,
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then(res => {
            const result = res.data.data
            const action = changeDetail(result.title, result.content)
            dispatch(action)
        })
    }
}