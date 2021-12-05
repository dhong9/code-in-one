import getData from "./baseService";

export const getAllChallenges = callback => getData("challenges/", callback);

export const getChallengeById = (id, callback) => getData("challenges/" + id, callback);