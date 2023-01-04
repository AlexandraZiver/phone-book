import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

class ClientService {
  static async getAll() {
    const response = await axiosInstance.get("clients");
    console.log(response.data);
    return response.data;
  }

  static async getById(id) {
    const response = await axiosInstance.get(`clients/${id}`);
    return response.data;
  }
}
export default ClientService;
