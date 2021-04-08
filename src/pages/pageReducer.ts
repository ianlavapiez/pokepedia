import { combineReducers } from "redux";
import home, { HomeActions } from "./home/store";

const pageReducer = combineReducers({
  home,
});

export type PageActions = HomeActions;

export default pageReducer;
