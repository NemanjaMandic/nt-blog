import { all, takeLatest, put } from "redux-saga/effects";
import { getCategoriesAPI } from "../../services/api";
import * as actions from "./actions";

export function* getCategories$() {
  try {
    const categories = yield getCategoriesAPI();
    yield put(actions.getCategoriesSuccess(categories.data));
  } catch (error) {
    yield put(actions.getCategoriesFail(error));
  }
}

export default function* () {
  yield all([takeLatest(actions.getCategories, getCategories$)]);
}
