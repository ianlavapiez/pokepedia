import { createSelector } from "reselect";
import { RootState } from "../../../store/rootReducer";

const homeState = (state: RootState) => state.page.home;

export const getError = createSelector(homeState, ({ error }) => error);
export const isLoading = createSelector(homeState, ({ loading }) => loading);
export const getPokemon = createSelector(homeState, ({ pokemon }) => pokemon);
