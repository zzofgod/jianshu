import React from 'react';
import { GlobalStyle } from './style'
import { IconFont } from './static/iconfont/iconfont'
import Header from './components/header'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './components/home/loadable.js'
import Detail from './components/detail'
import Login from './components/login';

function App() {
    return (
        <div className="App">
            {/*全局样式*/}
            <GlobalStyle></GlobalStyle>
            <IconFont></IconFont>
            <Provider store={store}>
                <HashRouter>
                    {/*header组件 */}
                    <Header></Header>
                    {/*首页和详情页路由 */}
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                    <Route path='/login' exact component={Login}></Route>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
