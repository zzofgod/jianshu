import React from 'react'
import { DetailWrapper, ArticleInfo, Article } from './style'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import BackTop from '../home/components/BackTop'

class Detail extends React.PureComponent {
    render() {
        return (
            <DetailWrapper>
                <h1>{this.props.article.get("title")}</h1>
                <ArticleInfo>
                    <a href="/" className="avatar"><img alt={this.props.article.get("name")} src="https://upload.jianshu.io/users/upload_avatars/16440539/f5114173-f2ff-486b-9949-da2f5b607cbf.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" /></a>
                    <div className="info">
                        <span className="name">{this.props.article.get("name")}</span>
                        <div className="meta">
                            <span className="time"><i className="iconfont">&#xe606; </i> {this.props.article.get("time")}</span>
                            <span className="count"><i className="iconfont">&#xe61d; </i>{String(this.props.article.get("article")).length}</span>
                            <span className="click"><i className="iconfont">&#xe637; </i> {this.props.article.get("click")}</span>
                        </div>
                    </div>
                </ArticleInfo>
                <Article>
                    {this.props.article.get("article")}
                </Article>
                <BackTop></BackTop>
            </DetailWrapper>

        )
    }
    componentWillMount() {
        const id = this.props.match.params.id
        axios.get('/article/edit?id=' + id).then((res) => {
            const result = res.data
            const action = {
                type: 'article_data',
                article: result
            }
            this.props.getArticle(action)
        }).catch(() => {
            alert("服务器异常")
        })
    }
}
export default connect(
    (state) => ({
        article: state.get("detail").get("article")
    }),
    (dispatch) => ({
        getArticle(action) {
            dispatch(action)
        }
    })
)(withRouter(Detail))
