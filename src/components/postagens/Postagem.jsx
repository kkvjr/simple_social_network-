import { Divider, Header, Menu, Segment } from "semantic-ui-react";
import FormComentario from "../formularios/FormularioComentarios";
import Comentarios from "./Comentarios";

const Postagens = (props) => {
  return (
    <Segment padded>
      <Header as="h3">{props.post.title}</Header>

      <Header as="h4">{props.post.description}</Header>

      <Divider />

      <Menu>
        <Menu.Menu position="right">
          <Menu.Item
            icon="trash"
            title="Excluir postagem"
            onClick={() => props.excluirPostagem(props.post)}
          />
          <Menu.Item
            icon="edit"
            title="Editar postagem"
            onClick={() => props.setPostagem(props.post)}
          />
        </Menu.Menu>
      </Menu>
      <label>Comentários</label>

      <FormComentario
        loading={props.loadingComentario}
        comentario={props.comentario}
        setComentario={props.setComentario}
        submitComentario={props.submitComentario}
        id={props.post.id}
      ></FormComentario>

      {props.post.comentarios.map((comentario) => (
        <Comentarios
          setComentario={props.setComentario}
          excluirComentario={props.excluirComentario}
          comentario={comentario}
        ></Comentarios>
      ))}
    </Segment>
  );
};

export default Postagens;
