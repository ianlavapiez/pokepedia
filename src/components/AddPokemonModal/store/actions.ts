import { ActionType, createAction } from "typesafe-actions";

export const showAddPokemonModal = createAction(
  "@component/addPokemonModal/showAddPokemonModal"
)<void>();
export const hideAddPokemonModal = createAction(
  "@component/addPokemonModal/hideAddPokemonModal"
)<void>();

export type Actions = ActionType<typeof showAddPokemonModal | typeof hideAddPokemonModal>;
