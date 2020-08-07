// @flow

import { all } from "redux-saga/effects";

import blogPostsSaga from "./blogPosts/saga";
import categoriesSaga from "./categories/saga";

export default function* (): Generator<*, *, *> {
  yield all([blogPostsSaga(), categoriesSaga()]);
}
