import { Form, Header, Segment } from "semantic-ui-react";

const FormPostagem = (props) => {
  return (
    <Form
      onSubmit={() => {
        props.onSubmit();
      }}
    >
      <Header as="h3">Nova Postagem</Header>
      <Segment>
        <Form.Field required>
          <label>Título da Postagem</label>
          <Form.Input
            fluid
            value={props.postagem.title}
            onChange={(e) => {
              props.setPostagem({ ...props.postagem, title: e.target.value });
            }}
          />
        </Form.Field>

        <Form.Field required>
          <label>Mensagem</label>
          <Form.TextArea
            rows={5}
            fluid
            value={props.postagem.description}
            onChange={(e) => {
              props.setPostagem({
                ...props.postagem,
                description: e.target.value,
              });
            }}
          />
        </Form.Field>

        <Form.Button content="Postar" fluid color="blue" />
      </Segment>
    </Form>
  );
};

export default FormPostagem;
