import { routerMiddleware } from "connected-react-router";
import { History } from "history";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware, { END } from "redux-saga";
import createRootReducer, { RootState } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import Environment from "../enum/Environment";

const configureReduxStore = (history: History): Store<RootState> => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({
    trace:
      !!process.env.REACT_APP_REDUX_TRACE &&
      process.env.REACT_APP_ENVIRONMENT !== Environment.PRODUCTION,
    traceLimit: 30,
  });

  const store = createStore(
    createRootReducer(history),
    undefined,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      store.replaceReducer(require("./rootReducer").default(history));
    });
    module.hot.accept("./rootSaga", () => {
      store.dispatch(END);
      sagaMiddleware.run(require("./rootSaga").default);
    });
  }

  return store;
};

export type AppDispatch = ReturnType<typeof configureReduxStore>["dispatch"];
export default configureReduxStore;
