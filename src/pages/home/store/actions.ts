import { ActionType, createAsyncAction } from "typesafe-actions";
import FirebaseError from "../../../types/FirebaseError";
import Pokemon from "../../../types/Pokemon";

export const initialize = createAsyncAction(
  "home/initialize/request",
  "home/initialize/success",
  "home/initialize/failure"
)<
  void,
  {
    pokemon: Pokemon[];
  },
  FirebaseError
>();

export const addPokemon = createAsyncAction(
  "home/addPokemon/request",
  "home/addPokemon/success",
  "home/addPokemon/failure"
)<{ isFavorite: boolean; name: string }, void, FirebaseError>();

export const updatePokemon = createAsyncAction(
  "home/updatePokemon/request",
  "home/updatePokemon/success",
  "home/updatePokemon/failure"
)<{ id: string; isFavorite: boolean; name: string }, void, FirebaseError>();

export const deletePokemon = createAsyncAction(
  "home/deletePokemon/request",
  "home/deletePokemon/success",
  "home/deletePokemon/failure"
)<{ id: string }, void, FirebaseError>();

export type Actions = ActionType<
  typeof initialize | typeof addPokemon | typeof deletePokemon | typeof updatePokemon
>;
