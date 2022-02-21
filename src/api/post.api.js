import Axios from "axios";
import api from "./api";

export default class Posts {
  static getCancelToken = () => Axios.CancelToken.source();

  static postar = async (obj) => {
    const req = await api.post("/posts", obj);

    return req.data;
  };

  static get = async () => {
    const req = await api.get(`/posts`);
    return req.data;
  };

  static update = async (obj) => {
    const req = await api.put(`/posts/${obj.id}`, obj);
    return req.data;
  };
  static delete = async (obj) => {
    const req = await api.delete(`/posts/${obj.id}`, obj);
    return req.data;
  };
}
