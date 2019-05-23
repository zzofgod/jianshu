import { combineReducers } from 'redux-immutable'
import headerReducer from '../components/header/reducer'
import homeReducer from '../components/home/store/reducer'
import detailReducer from '../components/detail/store/reducer'
import loginReducer from '../components/login/reducer'
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})
