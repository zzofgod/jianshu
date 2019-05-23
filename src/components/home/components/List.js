import React from 'react'
import { connect } from 'react-redux'
import { ListWrapper, ListItem, ListInfo, ListMeta, LoadMore } from '../style'
import axios from 'axios'
import { fromJS } from 'immutable'
import { Link } from 'react-router-dom'

class List extends React.PureComponent {
    render() {
        return (
            <ListWrapper>
                {
                    this.props.list.map((item, index) => (
                        <Link key={index} to={"/detail/" + item.get("id")}>
                            <ListItem>
                                <div className="wrap-img" href="#"><img alt={item.get('title')} src={item.get('img')} className="item-img" /></div>
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('article')}</p>
                                    <ListMeta></ListMeta>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))

                }
                {this.props.showMore ? <LoadMore onClick={() => { this.props.getMoreList(this.props.page) }}>加载更多</LoadMore> : <LoadMore>没有更多了</LoadMore>}
                {/* <LoadMore onClick={() => { this.props.getMoreList(this.props.page) }}>加载更多</LoadMore> */}
            </ListWrapper>
        )
    }

}
export default connect((state) => ({
    list: state.get('home').get('list'),
    page: state.get('home').get('listPage'),
    showMore: state.get('home').get('showMore')
}), (dispatch) => ({
    getMoreList(page) {
        axios.get("/article?id=" + page).then((res) => {
            const list = res.data
            console.log(list.length)
            if (list.length < 5) {
                const action = {
                    type: "get_more_list",
                    list: fromJS(list),
                    showMore: false
                }
                dispatch(action)
            }
            else {
                const action = {
                    type: "get_more_list",
                    list: fromJS(list),
                    listPage: page + 1,
                    showMore: true
                }
                dispatch(action)
            }

        }).catch(() => {
            alert("服务器异常")
        })

    }
}))(List)