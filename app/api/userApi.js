import axios from "axios";
import { DEFAULT_URL } from "./https";

const signInApi = (email, password) => {
    return axios.post(DEFAULT_URL + "login", { email, password });
}

const signUpApi = (data) => {
    return axios.post(DEFAULT_URL + "user", data);
}

const getPublicationsByUser = (id) => {
    return axios.get(DEFAULT_URL + "publication/user/" + id);
}

export {
    signInApi,
    signUpApi,
    getPublicationsByUser
}