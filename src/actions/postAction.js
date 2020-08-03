import * as postConstants from '../constants/postConstants';
import {ApiLib} from  '../lib';

export const addPost = (post) => async dispatch => {
    let newPost = await ApiLib.post("postAdd",post);
    dispatch({
        type: postConstants.ADD_POSTS,
        payload: {post:newPost}
    });
}

export const fetchPost = () => async dispatch => {
    let posts = await ApiLib.get("postList");
    dispatch({
        type: postConstants.FETCH_POSTS,
        payload: {posts}
    });
}


