import axios from "axios";

const API_URI = "https://restcountries.com/v3.1/all";

const getCountries = async () => {
  const response = await axios.get(API_URI);
  return response.data;
};

export { getCountries };
