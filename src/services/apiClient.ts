import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72e483fdb9ff4923ae1bcce059d681b7",
  },
});
