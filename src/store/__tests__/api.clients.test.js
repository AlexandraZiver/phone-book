import { rest } from "msw";
import { setupServer } from "msw/node";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createApi } from "../api/clients";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { BASE_URL } from "../../constants/endpoints";

const mockClients = [
  {
    general: {
      firstName: "Liana",
      lastName: "Crooks",
      avatar: "",
    },
    job: {
      company: "Ledner, Johnson and Predovic",
      title: "Investor Functionality Coordinator",
    },
    contact: {
      email: "Gerry_Hackett77@gmail.com",
      phone: "(895) 984-0132",
    },
    address: {
      street: "1520 Zemlak Cove",
      city: "New Devon",
      zipCode: "42586-7898",
      country: "Guinea-Bissau",
    },
    id: 0,
  },
  {
    general: {
      firstName: "Deontae",
      lastName: "Dare",
      avatar: "",
    },
    job: {
      company: "D'Amore, Dicki and Borer",
      title: "International Applications Consultant",
    },
    contact: {
      email: "Kellie.Marvin38@yahoo.com",
      phone: "1-615-843-3426 x600",
    },
    address: {
      street: "65901 Glover Terrace",
      city: "Alden ton",
      zipCode: "57744-4248",
      country: "Kenya",
    },
    id: 1,
  },
];

const api = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/clients`,
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

const store = configureStore({
  reducer: api.reducers ? combineReducers(api.reducers) : {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

const server = setupServer(
  rest.get("/clients", (req, res, ctx) => {
    return res(ctx.json(mockClients));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Clients API", () => {
  test("fetches all clients", async () => {
    const result = await api.endpoints.fetchAllClients();
    expect(result.data).toEqual(mockClients);
  });
});
