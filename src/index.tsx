import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { basepath } from "./enum/Path";
import reduxStore from "./store";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";

const history = createBrowserHistory({ basename: basepath });
reduxStore.createStore(history);

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <Provider store={reduxStore.store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}

serviceWorker.unregister();
