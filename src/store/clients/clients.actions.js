import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/clients`,
});

class ClientService {
  static getClients = createAsyncThunk(
    "clients/getClients",
    async function (_, { rejectWithValue }) {
      try {
        const response = await axiosInstance.get();

        if (response.statusText === "OK") {
          const { data } = response;
          return data;
        }
        throw new Error("failed to load data");
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
  );

  static getClientById = createAsyncThunk(
    "clients/getClientById",
    async function (id, { rejectWithValue }) {
      try {
        const response = await axiosInstance.get(id);

        if (response.statusText === "OK") {
          const { data } = response;
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
