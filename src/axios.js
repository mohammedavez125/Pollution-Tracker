import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.airvisual.com/v2",
});

export default instance;
