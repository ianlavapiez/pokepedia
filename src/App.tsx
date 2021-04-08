import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spin from "antd/es/spin";
import Path from "./enum/Path";
import { HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <Switch>
      <Suspense fallback={<Spin tip="Loading..." />}>
        <Route exact path={Path.HOME} component={HomePage} />
      </Suspense>
    </Switch>
  );
};

export default App;
