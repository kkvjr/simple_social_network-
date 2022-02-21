import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import Auth from "../../api/auth.api";
import { INICIO } from "../../constants/rotas";

const getUsuario = (state) => state?.auth?.data;

const Perfil = (props) => {
  const [novoUsuario, setNovoUsuario] = useState({});

  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    try {
      setLoading(true);
      const response = await Auth.get(usuario.id);

      setNovoUsuario(response);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    consultar();
  }, []);

  const submit = async () => {
    try {
      setLoading(true);

      await Auth.update(novoUsuario);

      setLoading(false);

      props.history.push(INICIO);
    } catch (error) {
      setLoading(false);
    }
  };

  const usuario = useSelector(getUsuario);

  return (
    <>
      <Segment className="login-form" loading={loading}>
        <Header as="h2" style={{ fontWeight: "bold", textAlign: "center" }}>
          Meu Perfil
        </Header>

        <Form onSubmit={() => submit()}>
          <Form.Field required>
            <label>Nome</label>
            <Form.Input
              value={novoUsuario.name}
              onChange={(e) =>
                setNovoUsuario({ ...novoUsuario, name: e.target.value })
              }
              placeholder="Nome"
            />
          </Form.Field>
          <Form.Field required>
            <label>E-mail</label>
            <Form.Input
              type="email"
              value={novoUsuario.email}
              onChange={(e) =>
                setNovoUsuario({ ...novoUsuario, email: e.target.value })
              }
              placeholder="E-mail"
            />
          </Form.Field>

          <Form.Button content="Atualizar" color="primary" fluid />

          <Button
            as="button"
            content="Cancelar"
            onClick={() => {
              props.history.push(INICIO);
            }}
            fluid
            className="btn_link"
          />
        </Form>
      </Segment>
    </>
  );
};

export default Perfil;
