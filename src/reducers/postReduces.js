import * as postConstants from '../constants/postConstants'

const initialState = {
    items:[]
}

const postReducer = (state = initialState ,action) =>{
    switch (action.type) {
        case postConstants.FETCH_POSTS:
              return {
                  ...state,
                  items:action.payload.posts,
              };
        case postConstants.ADD_POSTS:
            return {
                ...state,
                items:[
                    ...state.items,
                    action.payload.post,
                ]
            }
        default:
            return state;
    }
}

export default postReducer;
