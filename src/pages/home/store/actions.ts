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

export type Actions = ActionType<typeof initialize>;
