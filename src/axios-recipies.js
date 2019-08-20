import axios from "axios";
import * as config from "./config";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com",
    params: {
      apiKey: config.API_KEY
    }
});

export default instance;
