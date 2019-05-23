import styled from 'styled-components'
import logo from "../../static/img/logo.png"

export const HeaderWrapper = styled.header`
    height:56px;
    width:1440px;
    border-bottom:1px solid #f0f0f0;
    margin:0 auto;
    position:relative
`

export const Logo = styled.div`
    float:left;
    display:block;
    width:100px;
    height:56px;
    background:url(${logo});
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding:0 50px;
    box-sizing:border-box;
    float:left;
`

export const NavItem = styled.div`
    line-height:56px;
    color:#333;
    font-size:17px;
    padding:0 15px;
    cursor:pointer;
   &.left{
       float:left;
   } 
   &.right{
       float:right;
       color:#969696;
   }
   &.active{
    color:#ea6f5a;
   }
`
export const SearchWrapper = styled.div`
   float:left;
   position:relative;
   .zoom{
       position:absolute;
       right:5px;
       bottom:5px;
       width:30px;
       height:30px;
       line-height:30px;
       text-align:center;
       background-color:#eee;
       border-radius:19px;
       &.focused{
           background:#777;
           color:#fff
       }
   }
`


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height:38px;
    padding:0 35px 0 20px;
    margin-top:9px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#666
    }
    &.focused{
        width:240px;
    }

    
   &.slide-enter,&.slide-exit{
       transition:all .2s ease-out;
   }
   &.slide-enter-active{
       width:240px;
   }
   &.slide-exit-active{
       width:160px;
   }



`

export const Addition = styled.div`
    float:right;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-top:9px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }

`

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:13px;
        margin-right:2px;
        transition:all .3s ease-in;
        transform:rotate(0deg);
        transform-origin:center center;
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden;
`

export const SearchInfoItem = styled.a.attrs({
    href: "#"
})`
    text-decoration:none;
    display:inline-block;
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:10px;
`


