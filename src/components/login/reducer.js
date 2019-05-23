import { fromJS } from 'immutable'

const defaultState = fromJS({
    isLogin: false
})

export default (state = defaultState, action) => {
    switch (action.type){
        case "check_login":
            return state.set('isLogin', action.isLogin)
        case "logout":
            return state.set('isLogin', action.isLogin)
        default:
            return state
    }

}