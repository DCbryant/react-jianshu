import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {DetailWrapper,Header, Content } from './style';
import * as actionCreator from './store/actionCreators';
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
    render(){
        return (
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreator.getDetail(id))
    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));``