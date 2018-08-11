import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {RecommendWrapper,RecommendItem} from '../style';

class Recommand extends PureComponent {
    render(){
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map(item => {
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapToState = (state) => {
    return {
        list: state.getIn(['home','recommendList'])
    }
}

export default connect(mapToState,null)(Recommand)