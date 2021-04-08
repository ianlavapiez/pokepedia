import { createReducer } from "typesafe-actions";
import { Actions, initialize } from "./actions";
import FirebaseError from "../../../types/FirebaseError";
import Pokemon from "../../../types/Pokemon";

export type HomeState = {
  error: FirebaseError | undefined;
  loading: boolean;
  pokemon: Pokemon[];
};

const initialState: HomeState = {
  error: undefined,
  loading: false,
  pokemon: [],
};

const home = createReducer<HomeState, Actions>(initialState)
  .handleAction(initialize.request, (state) => ({
    ...state,
    error: undefined,
    loading: true,
  }))
  .handleAction(initialize.success, (state, action) => {
    const { pokemon } = action.payload;

    return {
      ...state,
      error: undefined,
      loading: false,
      pokemon,
    };
  })
  .handleAction(initialize.failure, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }));

export * from "./selectors";
export type HomeActions = Actions;
export default home;
