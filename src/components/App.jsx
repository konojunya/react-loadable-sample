import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./modules/loading";
import Loadable from "react-loadable";

const BundlePage = (loader) => {
  const LoadableComponent = Loadable({
    loader,
    loading: Loading
  })
  return () => <LoadableComponent />;
}

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BundlePage(() => import("./pages/index"))}></Route>
      <Route path="/about" component={BundlePage(() => import("./pages/about"))}></Route>
      <Route path="/now" component={BundlePage(() => import("./pages/now"))}></Route>
    </Switch>
  </BrowserRouter>
)