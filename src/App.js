import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Feature from "./Component/Feature/Feature";
import Gallery from "./Component/Gallery/Gallery";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </>
  );
}

export default App;
