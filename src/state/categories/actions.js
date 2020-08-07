import { createAction } from "redux-actions";

export const GET_CATEGORIES = "GET_CATEGORIES";
export const getCategories = createAction(GET_CATEGORIES);

export const GET_CATEGORIES_SUCCESS = `${GET_CATEGORIES}_SUCCESS`;
export const getCategoriesSuccess = createAction(GET_CATEGORIES_SUCCESS);

export const GET_CATEGORIES_FAIL = `${GET_CATEGORIES}_FAIL`;
export const getCategoriesFail = createAction(GET_CATEGORIES_FAIL);
