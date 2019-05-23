import styled from "styled-components"

export const LoginWrapper = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
`

export const Title = styled.h4`
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    text-align:center;
    a{
        font-weight: 700;
        color: #969696;
        padding:10px;
        font-size:18px;
    }
    b{
        padding:10px;
        color: #969696;
        font-size:18px;
    }
    .active{
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`
export const Form = styled.div`
    width:300px;
    margin:0 auto;
`


export const InputWrapper = styled.div`
    input{
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 0;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
    }
    
`

export const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`