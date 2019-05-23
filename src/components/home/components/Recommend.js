import React from 'react'
import { connect } from 'react-redux'

import { RecommendWrapper, RecommendItem } from '../style'

class Recommend extends React.PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {/* {
                    this.props.recommend.map((item, index) => (
                        <RecommendItem key={item.get('id')}><img alt="" src={item.get('imgUrl')} /></RecommendItem>
                    ))
                } */}

            </RecommendWrapper>
        )
    }
}
export default connect((state) => ({
    recommend: state.getIn(['home', 'recommend'])
}), null)(Recommend)