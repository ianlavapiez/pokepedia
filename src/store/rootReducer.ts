import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import components, { ComponentsActions } from "../components/componentsReducer";
import page, { PageActions } from "../pages/pageReducer";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    components,
    page,
  });

export type Actions = ComponentsActions | PageActions;

export type ActionsTypes = Actions["type"];

export type RootState = StateType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
