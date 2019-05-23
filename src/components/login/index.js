import React from 'react'
import { Link,Redirect } from 'react-router-dom'
import { LoginWrapper, Title,InputWrapper,Form,Button } from './style'
import axios from 'axios'
import { connect } from 'react-redux'

class Login extends React.PureComponent {
    render() {
           if(!this.props.isLogin){
                return (
                    <LoginWrapper>
                        <Title>
                            <Link to="/login" className="active" href="/sign_in">登录</Link>
                            <b>·</b>
                            <Link to="/register">注册</Link> 
                        </Title>
                        <Form>
                            <InputWrapper><input /></InputWrapper>
                            <InputWrapper><input /></InputWrapper>
                            <Button onClick={this.getLogin}>登录</Button>
                        </Form>
                    </LoginWrapper>
                )
           }else{
               return (
                   <Redirect to="/" />
               )
           }
    }
    getLogin = () => {
        axios.get('/data/login.json').then((res)=>{
            const action = {
                type:"check_login",
                isLogin:res.data.success
            }
                    console.log(this.props.isLogin)
            this.props.getAction(action)
        })

    }

}

export default connect((state)=>({
    isLogin:state.get('login').get('isLogin')
}),(dispatch)=>({
    getAction(action){
        dispatch(action)
    }
}))(Login)