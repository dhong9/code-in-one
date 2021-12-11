import { postData } from "./baseService";

export const addUser = (data, callback) => postData("codeInOne_auth/register/", data, callback);
export const loginUser = (data, callback) => postData("codeInOne_auth/login/", data, callback);