import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_BLOG_POSTS:
      return {
        ...state,
        resultData: {
          ...state.resultData,
          success: false,
        },
      };
    case actions.GET_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        resultData: payload,
        success: true,
      };
    case actions.GET_BLOG_POSTS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        success: false,
      };

    case actions.SEND_BLOG_POST:
      return {
        ...state,
        resultData: {
          ...state.resultData,
          success: false,
        },
      };
    case actions.SEND_BLOG_POST_SUCCESS:
      return {
        ...state,
        resultData: payload,
        success: true,
      };
    case actions.SEND_BLOG_POST_FAIL:
      return {
        ...state,
        errorMessage: payload,
        success: false,
      };
    default:
      return state;
  }
};
