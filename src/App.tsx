import React from "react";
import { Route, Switch } from "react-router-dom";
import Path from "./enum/Path";
import { HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={Path.HOME} component={HomePage} />
    </Switch>
  );
};

export default App;
