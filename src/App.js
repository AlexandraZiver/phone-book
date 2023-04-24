import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ClientDetails from "./components/ClientDetails";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<Home />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
