import { Header, Menu, Segment } from "semantic-ui-react";

const Comentarios = (props) => {
  return (
    <Segment>
      <Header as="h4">{props.comentario.content}</Header>
      <Header as="h4">{`${props.comentario.usuario.name}`}</Header>
      <Menu>
        <Menu.Menu position="right">
          <Menu.Item
            icon="trash"
            title="Excluir comentário"
            onClick={() => props.excluirComentario(props.comentario)}
          />
          <Menu.Item
            icon="edit"
            title="Editar comentário"
            onClick={() => props.setComentario(props.comentario)}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Comentarios;
