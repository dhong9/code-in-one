import { postData } from "./baseService";

export const addUser = (data, callback) => postData("codeInOne_auth/register/", data, callback);