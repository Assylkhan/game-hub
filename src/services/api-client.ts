import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d2fb7ce5a8124682ac981357388458e0"
  }
})