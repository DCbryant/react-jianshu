import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class Post extends PureComponent {
    render(){
        const {loginStatus} = this.props;
        return (
            <div>
                {!loginStatus ? <Redirect to="/login" /> : null}
                <p>article</p>
            </div>
        )
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})



export default connect(mapState, null)(Post);