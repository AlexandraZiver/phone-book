import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ClientDetails from "./components/ClientDetails/ClientDetails";
import ErrorPath from "./components/Error/ErrorPath";
import NotFound from "./components/Error/NotFound";
import HomePage from "./components/HomePage/HomePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/clients" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="*" element={<ErrorPath />} />
        <Route path="/clients/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
