import axios from "axios";

const baseUrl = "https://springbootyoutubescrapper-production.up.railway.app";

class MyService {
  getDetail(link) {
    const params = new URLSearchParams();
    params.append("link", link);
    return axios.post(baseUrl + "/data", params);
  }
}

export default new MyService();
