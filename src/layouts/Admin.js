import React, { useState, Fragment } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//apollo
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
//icons
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import StoreIcon from "@material-ui/icons/Store";
//button
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
//views
import Lista from "../views/lista";
import Pedido from "../views/pedido";
import Almacen from "../views/almacen";
//import routes from 'routes.js';
import styles from "../assets/styles/adminStyle";
import Informe from "../views/informe";

const useStyles = makeStyles(styles);

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

export default function Admin({ ...rest }) {
  const [loged, setLoged] = useState(localStorage.getItem("token") || "");
  const classes = useStyles();
  const [value, setValue] = React.useState("pedir");
  const history = useHistory();

  if (localStorage.getItem("token") === undefined) {
    setLoged("");
  }

  const handleChange = (event, newValue) => {
    if (localStorage.getItem("token") === undefined) {
      setLoged("");
    }
    setValue(newValue);
    history.push(`/admin/${newValue}`);
  };
  if (loged === "") return <Redirect to="/login" />;
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/admin/pedir">
          <Lista />
        </Route>
        <Route path="/admin/pedido">
          <Pedido />
        </Route>
        <Route exact path="/admin/almacen">
          <Almacen />
        </Route>
        <Route path="/admin/almacen/informe">
          <Informe />
        </Route>
        {/* <Route path="/admin/:id">
                        <Info />
                    </Route> */}
      </Switch>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.appBar}
      >
        <BottomNavigationAction
          label="Pedir"
          value="pedir"
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Pedido"
          value="pedido"
          icon={<FormatListNumberedRoundedIcon />}
        />
        <BottomNavigationAction
          label="Almacen"
          value="almacen"
          icon={<StoreIcon />}
        />
      </BottomNavigation>
    </ApolloProvider>
  );
}
