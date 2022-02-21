import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import Auth from "../api/auth.api";
import { CADASTRO, INICIO } from "../constants/rotas";
const Login = (props) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const submit = async () => {
    try {
      setLoading(true);
      await Auth.login(login);

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
            Bem vindo de volta!
          </Header>
          <Header as="h3" style={{ fontWeight: "bold", textAlign: "center" }}>
            Faça login para postar e comentar!
          </Header>

          <Form onSubmit={() => submit()}>
            <Form.Field required>
              <label>E-mail</label>
              <Form.Input
                type="email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                placeholder="E-mail"
              />
            </Form.Field>
            <Form.Field required>
              <label>Senha</label>
              <Form.Input
                type="password"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                placeholder="Senha"
              />
            </Form.Field>
            <Form.Button content="Entrar" color="primary" fluid />
            <Grid>
              <Grid.Row textAlign="center">
                <Grid.Column width={16}>
                  <label>Não tem cadastro ainda?</label>
                  <Button
                    as="button"
                    content="Cadastre-se aqui!"
                    onClick={() => {
                      props.history.push(CADASTRO);
                    }}
                    fluid
                    className="btn_link"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>
      </div>
    </>
  );
};

export default Login;
