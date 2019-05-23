import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends React.PureComponent {
    render() {
        return (
            <TopicWrapper>
                {/* {
                    this.props.topicList.map((item) => (
                        <TopicItem key={item.get('id')}><img alt={item.get('title')} className="topic-pic" src={item.get('imgUrl')} />{item.get('title')}</TopicItem>
                    ))
                } */}
            </TopicWrapper>
        )
    }
}
export default connect(
    (state) => ({
        topicList: state.get('home').get('topicList')
    }), null
)(Topic)