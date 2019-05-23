import * as actionsType from './actionsType'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
    type: actionsType.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionsType.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionsType.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionsType.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: actionsType.CHANGE_PAGE,
    page
})




const changeList = (data) => ({
    type: actionsType.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => ((dispatch) => {
    axios.get('/data/headerlist.json').then((res) => {
        const data = res.data
        dispatch(changeList(data.data))
    }).catch(() => {
        console.log('error')
    })
})