import React from 'react'
import axios from 'axios'
import banner from '../../static/img/banner.png'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import BackTop from './components/BackTop'


class Home extends React.PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img src={banner} alt="banner" width="625px" height="270px" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop></BackTop> : null}
            </HomeWrapper>

        )
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentDidMount() {
        this.bindEvents()
        axios.get('/article?id=1').then((res) => {
            const result = res.data
            console.log(result)
            const action = {
                type: 'change_home_data',
                // topicList: result.topicList,
                list: result,
                // recommend: result.recommend,
                // writer: result.writer
            }
            this.props.changeHomeData(action)
        }).catch(() => {
            alert("服务器异常")
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}
export default connect((state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
}), (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            const action = {
                type: 'show_scroll_top',
                showScroll: true
            }
            dispatch(action)
        } else {
            const action = {
                type: 'show_scroll_top',
                showScroll: false
            }
            dispatch(action)
        }

    }

}))(Home)