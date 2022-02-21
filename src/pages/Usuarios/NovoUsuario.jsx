import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import Auth from "../../api/auth.api";
import { INICIO } from "../../constants/rotas";
const NovoUsuario = (props) => {
  const [novoUsuario, setNovoUsuario] = useState({});

  const [loading, setLoading] = useState(false);

  const cadastrar = async () => {
    try {
      setLoading(true);

      await Auth.create(novoUsuario);

      setLoading(false);

      props.history.push(INICIO);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "block",
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/background.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Segment className="login-form" loading={loading}>
          <Header as="h2" style={{ fontWeight: "bold", textAlign: "center" }}>
            Seja muito bem vindo!
          </Header>
          <Header as="h3" style={{ fontWeight: "bold", textAlign: "center" }}>
            Informe seus dados para começar a postar!
          </Header>

          <Form>
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
            <Form.Field required>
              <label>Senha</label>
              <Form.Input
                type="password"
                value={novoUsuario.password}
                onChange={(e) =>
                  setNovoUsuario({ ...novoUsuario, password: e.target.value })
                }
                placeholder="Senha"
              />
            </Form.Field>
            <Form.Button
              content="Cadastrar"
              onClick={() => {
                cadastrar();
              }}
              color="primary"
              fluid
            />

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
      </div>
    </>
  );
};

export default NovoUsuario;
