import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../constants/endpoints";

const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/clients`,
  }),
  endpoints: (build) => ({
    fetchAllClients: build.query({
      query: () => ({
        url: "/",
      }),
    }),
    fetchClientById: build.query({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
export { createApi, clientsApi };
