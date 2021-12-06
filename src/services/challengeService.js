import { getData } from "./baseService";

export const getAllChallenges = callback => getData("api/challenges/", callback);

export const getChallengeById = (id, callback) => getData("api/challenges/" + id, callback);