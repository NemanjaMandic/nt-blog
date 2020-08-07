import { createAction } from "redux-actions";

export const GET_BLOG_POSTS = "GET_BLOG_POSTS";
export const getBlogPosts = createAction(GET_BLOG_POSTS);

export const GET_BLOG_POSTS_SUCCESS = `${GET_BLOG_POSTS}_SUCCESS`;
export const getBlogPostsSuccess = createAction(GET_BLOG_POSTS_SUCCESS);

export const GET_BLOG_POSTS_FAIL = `${GET_BLOG_POSTS}_FAIL`;
export const getBlogPostsFail = createAction(GET_BLOG_POSTS_FAIL);

export const SEND_BLOG_POST = "SEND_BLOG_POST";
export const sendBlogPost = createAction(SEND_BLOG_POST);

export const SEND_BLOG_POST_SUCCESS = `${SEND_BLOG_POST}_SUCCESS`;
export const sendBlogPostSuccess = createAction(SEND_BLOG_POST_SUCCESS);

export const SEND_BLOG_POST_FAIL = `${SEND_BLOG_POST}_FAIL`;
export const sendBlogPostFail = createAction(SEND_BLOG_POST_FAIL);
