import * as actionsType from './actionsType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 0,
    totalPage: 1,
    mouseIn: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.SEARCH_FOCUS:
            return state.set('focused', true)
        case actionsType.SEARCH_BLUR:
            return state.set('focused', false)
        case actionsType.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case actionsType.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionsType.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionsType.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}