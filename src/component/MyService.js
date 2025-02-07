import axios from "axios";

const baseUrl = "http://localhost:8080";

class MyService {
  getDetail(link) {
    const params = new URLSearchParams();
    params.append("link", link);
    return axios.post(baseUrl + "/data", params);
  }
}

export default new MyService();
