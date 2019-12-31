import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.css";
//Router
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//Routes
import Main from "./layouts/mainMenu";
import Admin from "./layouts/Admin.js";
import login from "./layouts/login.js";
//service Worker
import * as serviceWorker from "./serviceWorker";
//apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://miserver.com.es",
  headers: {
    authorization: "Bearer " + localStorage.getItem("token")
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={login} />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
