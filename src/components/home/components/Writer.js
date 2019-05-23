import React from 'react'
import { connect } from 'react-redux'

import { WriterWrapper, WriterItem, WriterTitle } from '../style'

class Writer extends React.PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <a href="/" className="page-change"><i className="iconfont">&#xe851; </i> 换一批</a>
                </WriterTitle>
                {/* {
                    this.props.writer.map((item, index) => (
                        <WriterItem key={item.get("id")}>
                            <a href="/" className="avatar"><img src={item.get('imgUrl')} alt="" /></a>
                            <a href="/" className="follow">+关注</a>
                            <a href="/" className="name">{item.get('name')}</a>
                            <p href="/" >{item.get('desc')}</p>
                        </WriterItem>
                    ))
                } */}

            </WriterWrapper>
        )
    }
}
export default connect((state) => ({
    writer: state.getIn(['home', 'writer'])
}), null)(Writer)