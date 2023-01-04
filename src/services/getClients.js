import axios from "axios";

import { BASE_URL } from "../constants/endpoints";

const clientsService = axios.create({
  baseURL: BASE_URL,
  timeout: 1500,
});
async function getAll() {
  const response = await clientsService.get();
  return response.data;
}

async function getById(id) {
  const response = await clientsService.get(`${BASE_URL}/${id}`);
  // console.log(response.data);
  return response.data;
}

export { getAll, getById };
