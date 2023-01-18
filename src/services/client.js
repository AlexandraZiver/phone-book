import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});
class ClientService {
  static getClients = createAsyncThunk(
    "toolkit/getClient",
    async function (_, { rejectWithValue }) {
      try {
        const response = await axiosInstance.get();
        if (response.statusText === "OK") {
          const data = response.data;
          return data;
        }
        throw new Error("failed to load data");
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );
}

export default ClientService;
