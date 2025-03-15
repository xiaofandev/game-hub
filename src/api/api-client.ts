import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72e483fdb9ff4923ae1bcce059d681b7",
  },
});

export default apiClient;
