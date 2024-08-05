import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "382b4317f8494b13bc4c320c0965b8b5",
  },
});
