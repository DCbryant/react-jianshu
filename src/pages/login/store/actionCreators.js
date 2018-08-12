import axios from 'axios';
import * as constans from './constans';

const changeLogin = () => ({
    type: constans.CHANGE_LOGIN,
    value: true
})


export const login = (accout,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?accout=' + accout + '&password' + password).then(res => {
            const result = res.data.data
            if(result){
                dispatch(changeLogin())
            }else{
                alert('failed to login')
            }
        })
    }
}

export const logOut = () => ({
    type: constans.CHANGE_LOGOUT,
    value: false
})