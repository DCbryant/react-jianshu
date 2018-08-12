import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LoginWrapper, LoginBox, Input, Button} from './style';
import * as actionCreator from './store/actionCreators'

class Login extends PureComponent {
    render(){
        const {loginStatus} = this.props;
        return (
            <LoginWrapper>
                {loginStatus ? <Redirect to="/" /> : null}
                <LoginBox>
                    <Input 
                        placeholder="账号" 
                        innerRef={input => {this.account = input}}
                    />
                    <Input 
                        placeholder="密码" 
                        type="password" 
                        innerRef={input => {this.password = input}}
                    />
                    <Button onClick={() => this.props.login(this.account,this.password)}>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(account,password){
        dispatch(actionCreator.login(account.value,password.value))
    }
})

export default connect(mapState, mapDispatch)(Login);