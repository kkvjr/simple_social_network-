import Axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";
import ActionTypes from "../store/ActionTypes";
import api from "./api";

export default class Auth {
  static getCancelToken = () => Axios.CancelToken.source();

  static login = async (login) => {
    const req = await api.post("/auth/login", login);

    store.dispatch({
      type: ActionTypes.AUTH.LOGIN,
      payload: { ...req.data, data: jwt_decode(req.data.token) },
    });
    return req.data;
  };

  static signout = async () => {
    store.dispatch({
      type: ActionTypes.AUTH.LOGOUT,
    });
  };

  static create = async (obj) => {
    const req = await api.post("/auth/create", obj);

    store.dispatch({
      type: ActionTypes.AUTH.LOGIN,
      payload: { ...req.data, data: jwt_decode(req.data.token) },
    });
    return req.data;
  };

  static get = async (id) => {
    const req = await api.get(`/auth/${id}`);
    return req.data;
  };

  static update = async (obj) => {
    const req = await api.put(`/auth/${obj.id}`, obj);
    return req.data;
  };
}
