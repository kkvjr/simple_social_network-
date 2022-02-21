import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { CADASTRO, INICIO, LOGIN, PERFIL } from "../constants/rotas";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import NovoUsuario from "../pages/Usuarios/NovoUsuario";
import Perfil from "../pages/Usuarios/Perfil";
import PrivateRoute from "./PrivateRoute";

const history = createBrowserHistory();

export default function Navigator() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={LOGIN} exact component={Login} />
        <PrivateRoute path={INICIO} exact component={Inicio} />
        <Route path={CADASTRO} exact component={NovoUsuario} />
        <PrivateRoute path={PERFIL} exact component={Perfil} />
      </Switch>
    </Router>
  );
}
