import { combineReducers } from "redux";
import addPokemonModal, { AddPokemonModalActions } from "./AddPokemonModal/store";

const componentsReducer = combineReducers({
  addPokemonModal,
});

export type ComponentsActions = AddPokemonModalActions;

export default componentsReducer;
