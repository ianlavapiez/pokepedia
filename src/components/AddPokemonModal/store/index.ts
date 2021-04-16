import { createReducer } from "typesafe-actions";
import { Actions, hideAddPokemonModal, showAddPokemonModal } from "./actions";

interface AddPokemonModalState {
  addPokemonModalVisible: boolean;
  loading: boolean;
}

const initialState: AddPokemonModalState = {
  addPokemonModalVisible: false,
  loading: false,
};

const addPokemonModal = createReducer<AddPokemonModalState, Actions>(initialState)
  .handleAction(hideAddPokemonModal, (state) => ({
    ...state,
    addPokemonModalVisible: false,
  }))
  .handleAction(showAddPokemonModal, (state) => ({
    ...state,
    addPokemonModalVisible: true,
  }));

export * from "./selectors";
export type AddPokemonModalActions = Actions;
export default addPokemonModal;
