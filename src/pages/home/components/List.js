import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo, LoadMore} from '../style';
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render(){
        const {list, getList, page} = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link key={index} to="/detail">
                            <ListItem >
                                <img 
                                    src={item.get('imgUrl')}
                                    className="pic"  
                                    alt=""  
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="dis">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapToState = (state) => {
    return {
        list: state.getIn(['home','articleList']),
        page: state.getIn(['home','articlePage']),
    }
}

const mapDispatch = (dispatch) => ({
    getList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapToState,mapDispatch)(List)
