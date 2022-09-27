import React from "react";
import { Route, Routes } from "react-router-dom";

import ClientDetails from "./components/ClientDetails/ClientDetails";
import ClientList from "./components/ClientList";
import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <ClientList />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clients" element={<HomePage />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
