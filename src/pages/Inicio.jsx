import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import Comments from "../api/comments.api";
import Posts from "../api/post.api";
import FormPostagem from "../components/formularios/FormPostagens";
import Postagens from "../components/postagens/Postagem";
const getUsuario = (state) => state?.auth?.data;

const Inicio = (props) => {
  const [postagem, setPostagem] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingComentario, setLoadingComentario] = useState(false);
  const [postagems, setPostagems] = useState([]);
  const [comentario, setComentario] = useState({});

  const usuario = useSelector(getUsuario);

  useEffect(() => {
    consultar();
  }, []);
  const submit = async () => {
    try {
      setLoading(true);

      if (postagem.id) {
        await Posts.update(postagem);
      } else {
        const obj = {
          user_id: usuario.id,
          ...postagem,
          publication_date: moment().format("YYYY/MM/DD HH:mm:ss"),
        };
        await Posts.postar(obj);
      }

      setPostagem({ title: "", description: "" });
      setLoading(false);

      consultar();
    } catch (error) {
      setLoading(false);
    }
  };

  const consultar = async () => {
    try {
      setLoading(true);

      const response = await Posts.get();

      setPostagems(response);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const submitComentario = async (id) => {
    try {
      setLoadingComentario(true);

      if (comentario.id) {
        await Comments.update(comentario);
      } else {
        const obj = {
          user_id: usuario.id,
          post_id: id,
          ...comentario,
        };

        await Comments.postar(obj);
      }

      setComentario({ content: "" });
      setLoadingComentario(false);

      consultar();
    } catch (error) {
      setLoadingComentario(false);
    }
  };

  const excluirComentario = async (comentario) => {
    try {
      setLoadingComentario(true);

      await Comments.delete(comentario);

      setLoadingComentario(false);

      consultar();
    } catch (error) {
      setLoadingComentario(false);
    }
  };

  const excluirPostagem = async (postagem) => {
    try {
      setLoading(true);

      await Posts.delete(postagem);

      setLoading(false);

      consultar();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Segment basic padded>
        <FormPostagem
          onSubmit={submit}
          postagem={postagem}
          setPostagem={setPostagem}
          loading={loading}
        ></FormPostagem>

        {postagems.map((post) => (
          <Postagens
            setPostagem={setPostagem}
            loadingComentario={loadingComentario}
            comentario={comentario}
            setComentario={setComentario}
            submitComentario={submitComentario}
            excluirComentario={excluirComentario}
            excluirPostagem={excluirPostagem}
            post={post}
          ></Postagens>
        ))}
      </Segment>
    </>
  );
};

export default Inicio;
