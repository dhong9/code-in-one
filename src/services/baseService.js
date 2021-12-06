import { create } from "apisauce";

const api = create({ baseURL: "https://dhong9.pythonanywhere.com/" });

export const getData = (url, callback) =>
    api
        .get(url)
        .then(callback);

export const postData = (url, payload, callback) =>
    api
        .post(url, payload)
        .then(callback);