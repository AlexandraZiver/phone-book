import React from "react";
<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom";

import ClientDetails from "./components/ClientDetails/ClientDetails";
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
=======
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
>>>>>>> 3233376 (feature/clients-details)
  );
}

export default App;
