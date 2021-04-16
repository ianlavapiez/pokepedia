import { createSelector } from "reselect";
import { RootState } from "../../../store/rootReducer";

const componentState = (state: RootState) => state.components.addPokemonModal;

export const isAddPokemonModalVisible = createSelector(
  componentState,
  ({ addPokemonModalVisible }) => addPokemonModalVisible
);

export const isLoading = createSelector(componentState, ({ loading }) => loading);
