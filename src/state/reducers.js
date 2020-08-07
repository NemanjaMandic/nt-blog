import { combineReducers } from "redux";
import blogPosts from "./blogPosts/reducer";
import categories from "./categories/reducer";

const rootReducer = combineReducers({
  blogPosts,
  categories,
});

export default rootReducer;
