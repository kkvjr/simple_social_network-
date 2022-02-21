import { Form } from "semantic-ui-react";

const FormComentario = (props) => {
  return (
    <Form
      onSubmit={() => {
        props.submitComentario(props.id);
      }}
      loading={props.loadingComentario}
    >
      <Form.Field required>
        <label>Mensagem</label>
        <Form.TextArea
          rows={5}
          onChange={(e) =>
            props.setComentario({
              ...props.comentario,
              content: e.target.value,
            })
          }
          value={props.comentario.content}
        />
      </Form.Field>

      <Form.Button content="Comentar" color="blue" />
    </Form>
  );
};

export default FormComentario;
