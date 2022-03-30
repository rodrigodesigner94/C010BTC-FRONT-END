import axios from "axios";

const api = axios.create({
  baseURL: "https://bingoo-btc.herokuapp.com/",
  headers: { "Content-type": "application/json" },
});

export default api;
