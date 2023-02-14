import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});

class ClientService {
  static async getAll() {
    const { data } = await axiosInstance.get();
    return data;
  }
  static async getById(id) {
    const { data } = await axiosInstance.get(id);
    return data;
  }
}

export default ClientService;
