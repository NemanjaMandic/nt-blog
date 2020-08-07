import { all, takeLatest, put } from "redux-saga/effects";
import { getBlogPostsAPI, sendBlogPostAPI } from "../../services/api";
import * as actions from "./actions";

export function* getBlogPosts$() {
  try {
    const posts = yield getBlogPostsAPI();

    yield put(actions.getBlogPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.getBlogPostsFail(error));
  }
}

export function* sendBlogPost$({ payload }) {
  try {
    const post = yield sendBlogPostAPI(payload);
    yield put(actions.sendBlogPostSuccess(post.data));
    yield put(actions.getBlogPosts());
  } catch (error) {
    yield put(actions.sendBlogPostFail(error));
  }
}

export default function* () {
  yield all([
    takeLatest(actions.getBlogPosts, getBlogPosts$),
    takeLatest(actions.sendBlogPost, sendBlogPost$),
  ]);
}
