import * as actions from "./actions";

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_CATEGORIES:
      return {
        ...state,
        ...state.resultData,
        success: false,
      };
    case actions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        success: true,
        resultData: payload,
      };
    case actions.GET_CATEGORIES_FAIL:
      return {
        ...state,
        success: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
