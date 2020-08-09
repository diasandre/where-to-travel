import axios from "axios";

const API_BASE_URL = "https://restcountries.eu/rest/v2";
const API_SEARCH_NAME = "/name";

export const searchCountryByName = value =>
  axios.get(`${API_BASE_URL}${API_SEARCH_NAME}/${value}`);
