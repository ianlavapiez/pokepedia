import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import page, { PageActions } from "../pages/pageReducer";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    page,
  });

export type Actions = PageActions;

export type ActionsTypes = Actions["type"];

export type RootState = StateType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
