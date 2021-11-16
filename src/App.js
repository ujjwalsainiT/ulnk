import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import Feature from "./Component/Feature/Feature";
import Gallery from "./Component/Gallery/Gallery";
import Blog from "./Component/Blog/Blog";
import Pricing from "./Component/Pricing/Pricing";
import Login from "./Component/Login/Login";
import AddLinks from "./Component/AfterLoginPage/AddLinks/AddLinks";
import MyAccount from "./Component/AfterLoginPage/MyAccount/MyAccount";
import EmailVerify from "./Component/AfterLoginPage/MyAccount/EmailVerify";
import ResetPassword from "./Component/AfterLoginPage/MyAccount/ResetPassword";
import FreeTrail from "./Component/AfterLoginPage/FreeTrail/FreeTrail";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/login" component={Login} />

        {/*After login Page*/}
        <Route exact path="/add-links" component={AddLinks} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/email-verify" component={EmailVerify} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/free-trail" component={FreeTrail} />
      </Switch>
    </>
  );
}

export default App;
