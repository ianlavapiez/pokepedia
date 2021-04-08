import { Store } from "redux";
import { RootState } from "./rootReducer";
import configureReduxStore from "./configureReduxStore";
import { History } from "history";

/**
 * Holds Redux store to make it possible to use it in
 * regular functions outside of React components.
 */
class ReduxStore {
  // guaranteed to call createStore in /src/index.ts
  private _store!: Store<RootState>;

  createStore(history: History) {
    this._store = configureReduxStore(history);
  }

  get store(): Store<RootState> {
    return this._store;
  }
}

const reduxStore = new ReduxStore();
export default reduxStore;
