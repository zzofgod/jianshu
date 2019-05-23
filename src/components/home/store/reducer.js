import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [],
    list: [],
    recommend: [],
    writer: [],
    listPage: 2,
    showScroll: false,
    showMore:true
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_home_data":
            return state.merge({
                topicList: fromJS(action.topicList),
                list: fromJS(action.list),
                recommend: fromJS(action.recommend),
                writer: fromJS(action.writer)
            })
        case "get_more_list":
            return state.merge({
                list: state.get('list').concat(action.list),
                listPage: action.listPage,
                showMore: action.showMore
            })
        case "show_scroll_top":
            return state.merge({
                showScroll: action.showScroll
            })
        default:
            return state
    }
}