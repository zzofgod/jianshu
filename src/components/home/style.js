import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`

export const HomeLeft = styled.div`
    padding-top:30px;
    margin-left:15px;
    width:625px;
    float:left;
`


export const HomeRight = styled.div`
    padding-top:30px;
    width:240px;
    float:right

    
`

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;

`

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`

export const ListWrapper = styled.div`
    margin-top:30px;
    overflow:hidden;
`

export const ListItem = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .item-img{
        float: right;
        width: 150px;
        height: 100px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: RGB(241, 243, 244);
        border-radius: 4px;
        margin-left: 15px;
    }
    .wrap-img{
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        width: 150px;
        height: 100px;
    }
`

export const ListInfo = styled.div`
    padding-right: 165px;
    h3{
        margin: -5px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`

export const ListMeta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
`

export const LoadMore = styled.a`
    text-decoration:none;
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px -1px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    line-height:40px;
    background-color: #a5a5a5;
    display: block;
    cursor:pointer
`
export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`
export const RecommendItem = styled.a`
    img{
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`

export const WriterWrapper = styled.div`
    margin-top:30px;

`
export const WriterTitle = styled.div`
    span{
        font-size: 14px;
        color: #969696;
        text-align:left;
    }
    .page-change{
        float: right;
        display: inline-block;
        font-size: 12px;
        color: #969696;
        cursor:pointer; 
    }
`

export const WriterItem = styled.div`
    margin-top: 20px;
    line-height: 20px;
    .avatar{
        display:block;
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;     
        }
    }
    .follow{
        float: right;
        margin-top: 25px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`

export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    display: block;
    line-height:50px;
    color:#333;
    background:#fff;
}
`

export const LoadingImg = styled.div`
    width:800px;
    height:500px;
    margin:100px auto;
`