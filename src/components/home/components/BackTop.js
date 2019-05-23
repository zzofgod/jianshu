import React from 'react'
import { BackTop as GoToTop } from '../style'

class BackTop extends React.PureComponent {
    render() {
        return (
            <GoToTop className="iconfont" onClick={this.hundleBackTop}>
                &#xe631;
            </GoToTop>
        )
    }
    hundleBackTop = () => {
        window.scrollTo(0, 0)
    }


}
export default BackTop
