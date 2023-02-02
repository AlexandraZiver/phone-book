import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});

class ClientService {
  static async getAll() {
    const response = await axiosInstance.get();
    const { data } = response;
    return data;
  }
  static async getById(id) {
    const response = await axiosInstance.get(id);
    const { data } = response;
    return data;
  }
}

export default ClientService;
