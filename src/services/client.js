import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});

class ClientService {
  static async getAll() {
    const response = await axiosInstance.get();
    return response;
  }
}

export default ClientService;
