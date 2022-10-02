import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ClientDetails from "./components/ClientDetails/ClientDetails";
import ErrorPath from "./pages/ErrorPath";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<Home />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="*" element={<ErrorPath />} />
      </Route>
    </Routes>
  );
}

export default App;
