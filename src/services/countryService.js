import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v2/all";
// const API_SEARCH_NAME = "/name";

export const listAll = () => axios.get(API_BASE_URL);
