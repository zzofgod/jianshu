import styled from 'styled-components'

export const DetailWrapper = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 620px;
    h1{
        word-break: break-word!important;
        word-break: break-all;
        margin: 20px 0 0;
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
    }
`
export const ArticleInfo = styled.div`
    margin: 30px 0 40px;
    
    .avatar{
        width: 48px;
        height: 48px;
        vertical-align: middle;
        display: inline-block;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .info{
        vertical-align: middle;
        display: inline-block;
        margin-left: 8px;
        .name{
            margin-right: 3px;
            font-size: 16px;
            vertical-align: middle;
        }
        .meta{
            font-size: 12px;
            color: #969696;
            margin-top: 10px;
            font-size: 12px;
            color: #969696;
            span{
                padding-right:15px;
            }
            .iconfont{
                font-size:11px;
            }
        }
    }
    
`

export const Article = styled.div`
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
`