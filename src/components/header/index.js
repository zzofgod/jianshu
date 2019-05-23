import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from './actions' 


class Header extends React.PureComponent {
    render() {
        return (<HeaderWrapper>
            <Link to="/"><Logo></Logo></Link>
            <Nav>
                <Link to="/"><NavItem className="left active">首页</NavItem></Link>
                <NavItem className="left">下载APP</NavItem>
                <Link to="/login">
                    <NavItem className="right">
                        {
                            this.props.isLogin ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : <NavItem className="right">登录</NavItem>
                        }
                    </NavItem>
                </Link>
                <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>

                <SearchWrapper>
                    <CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
                        <NavSearch
                            onFocus={()=>this.props.hundleInputFocus(this.props.list)}
                            onBlur={this.props.hundleInputBlur}
                            className={this.props.focused ? 'focused' : ''}></NavSearch>
                    </CSSTransition>
                    <i className={this.props.focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#xe637;</i>
                    
                    {this.getListArea()}
                </SearchWrapper>

            </Nav>
            <Addition>
                <Button className="writting"><i className="iconfont">&#xe61d; </i> 写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>)
    }
    getListArea = () => {
        var list = this.props.list.toJS()
        var pageList = []
            for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={i}>{list[i]}</SearchInfoItem>
                )
            }
        if (this.props.focused || this.props.mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.hundleMouseEnter} onMouseLeave={this.props.hundleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch
                            onClick={() => this.props.hundleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
                            <i  ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>)
        } else {
            return null
        }
    }
}
export default connect(
    (state) => ({
        focused: state.get("header").get("focused"),
        //等价于 focused: state.getIn(["header","focused"])
        list: state.get("header").get("list"),
        page: state.getIn(["header", "page"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        totalPage: state.getIn(["header", "totalPage"]),
        isLogin: state.getIn(['login','isLogin'])
    }),
    (dispatch) =>({
        hundleInputFocus(list) {
            if(list.size===0){
                dispatch(actions.getList())
            }
            dispatch(actions.searchFocus())
        },
        hundleInputBlur() {
            dispatch(actions.searchBlur())
        },
        hundleMouseEnter() {
            dispatch(actions.mouseEnter())
        },
        hundleMouseLeave() {
            dispatch(actions.mouseLeave())
        },
        hundleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (page < totalPage) {
                dispatch(actions.changePage(page + 1))
            }
            else {
                dispatch(actions.changePage(1))
            }
        },

        logout(){
            const action = {
                type:'logout',
                isLogin:false
            }
            dispatch(action)
        }
    })
)(Header)