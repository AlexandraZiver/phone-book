import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});
class ClientService {
  static getClients = createAsyncThunk("toolkit/getClient", async function () {
    const response = await axiosInstance.get();
    const data = response.data;
    return data;
  });
}

export default ClientService;
