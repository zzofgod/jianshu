import { fromJS } from 'immutable'

const defaultState = fromJS({
    article:[]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case "article_data":
            return state.merge({
                article:fromJS(action.article)
            })
        default:
            return state
    }
}