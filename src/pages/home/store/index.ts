import { createReducer } from "typesafe-actions";
import { Actions, initialize, addPokemon, deletePokemon, updatePokemon } from "./actions";
import FirebaseError from "../../../types/FirebaseError";
import Pokemon from "../../../types/Pokemon";

export type HomeState = {
  error: FirebaseError | undefined;
  isSuccessful: boolean;
  loading: boolean;
  pokemon: Pokemon[];
};

const initialState: HomeState = {
  error: undefined,
  isSuccessful: false,
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
  }))
  .handleAction(addPokemon.request, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: false,
    loading: true,
  }))
  .handleAction(addPokemon.success, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: true,
    loading: false,
  }))
  .handleAction(addPokemon.failure, (state, action) => ({
    ...state,
    error: action.payload,
    isSuccessful: false,
    loading: false,
  }))
  .handleAction(updatePokemon.request, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: false,
    loading: true,
  }))
  .handleAction(updatePokemon.success, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: true,
    loading: false,
  }))
  .handleAction(updatePokemon.failure, (state, action) => ({
    ...state,
    error: action.payload,
    isSuccessful: false,
    loading: false,
  }))
  .handleAction(deletePokemon.request, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: false,
    loading: true,
  }))
  .handleAction(deletePokemon.success, (state) => ({
    ...state,
    error: undefined,
    isSuccessful: true,
    loading: false,
  }))
  .handleAction(deletePokemon.failure, (state, action) => ({
    ...state,
    error: action.payload,
    isSuccessful: false,
    loading: false,
  }));

export * from "./selectors";
export type HomeActions = Actions;
export default home;
