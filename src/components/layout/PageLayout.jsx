import React from "react";
import { Menu } from "semantic-ui-react";
import Auth from "../../api/auth.api";
import { INICIO, LOGIN, PERFIL } from "../../constants/rotas";

const PageLayout = (props) => {
  const { component: Component } = props;

  const logout = async () => {
    await Auth.signout();
    props.history.push(LOGIN);
  };

  return (
    <>
      <Menu>
        <Menu.Menu>
          <Menu.Item
            content="Inicio"
            onClick={() => props.history.push(INICIO)}
          ></Menu.Item>
          <Menu.Item
            content="Meu Perfil"
            onClick={() => props.history.push(PERFIL)}
          ></Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => logout()} content="Sair" />
        </Menu.Menu>
      </Menu>
      <Component {...props} />
    </>
  );
};

export default PageLayout;
