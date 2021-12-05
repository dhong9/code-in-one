import { create } from "apisauce";

const api = create({ baseURL: "https://dhong9.pythonanywhere.com/api/" });

export default function getData(url, callback) {
    api
        .get(url)
        .then(callback);
}