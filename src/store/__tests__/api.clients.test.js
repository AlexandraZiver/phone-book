import { rest } from "msw";
import { setupServer } from "msw/node";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import clientsApi from "../api/clients";

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

const server = setupServer(
  rest.get("/clients", (req, res, ctx) => {
    return res(ctx.json(mockClients));
  }),
  rest.get("/clients/:id", (req, res, ctx) => {
    const { id } = req.params;
    const client = mockClients.find((c) => c.id === parseInt(id));
    if (client) {
      return res(ctx.json(client));
    } else {
      return res(ctx.status(404));
    }
  }),
);

const rootReducer = combineReducers({
  [clientsApi.reducerPath]: clientsApi.reducer,
});

const setupApiStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientsApi.middleware),
  });

  return { store, api: clientsApi };
};

describe("Clients API", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const { store, api } = setupApiStore();

  it("fetches clients", async () => {
    const result = await store.dispatch(api.endpoints.fetchAllClients());
    expect(result.data).toEqual(mockClients);
  });

  it("fetches client by ID", async () => {
    const result = await store.dispatch(api.endpoints.fetchClientById({ id: 1 }));
    expect(result.data).toEqual(mockClients[1]);
  });
});
