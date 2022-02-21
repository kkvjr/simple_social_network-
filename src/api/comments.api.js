import Axios from "axios";
import api from "./api";

export default class Comments {
  static getCancelToken = () => Axios.CancelToken.source();

  static postar = async (obj) => {
    const req = await api.post("/comments", obj);

    return req.data;
  };

  static get = async () => {
    const req = await api.get(`/comments`);
    return req.data;
  };

  static update = async (obj) => {
    const req = await api.put(`/comments/${obj.id}`, obj);
    return req.data;
  };
  static delete = async (obj) => {
    const req = await api.delete(`/comments/${obj.id}`, obj);
    return req.data;
  };
}
