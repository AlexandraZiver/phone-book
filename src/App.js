import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Route, Routes, Navigate } from "react-router-dom";

import ClientDetails from "./components/ClientDetails/ClientDetails";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Route, Routes, Navigate } from "react-router-dom";
>>>>>>> 8700e74 (fix/clients-details)

import ClientDetails from "./components/ClientDetails/ClientDetails";
=======
import ErrorPath from "./components/Error/ErrorPath";
import NotFound from "./components/Error/NotFound";
>>>>>>> a73c268 (fix/clients-details)
import HomePage from "./components/HomePage/HomePage";
=======
import ErrorPath from "./pages/ErrorPath";
import Home from "./pages/Home";
>>>>>>> fe3fb2f (fix comments/clients details)
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Navigate to="/clients" />} />
        <Route path="/clients" element={<Home />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
<<<<<<< HEAD
        <Route path="*" element={<NotFound />} />
<<<<<<< HEAD
      </Routes>
    </>
>>>>>>> 3233376 (feature/clients-details)
=======
=======
        <Route path="*" element={<ErrorPath />} />
<<<<<<< HEAD
        <Route path="/clients/*" element={<NotFound />} />
>>>>>>> a73c268 (fix/clients-details)
=======
>>>>>>> fe3fb2f (fix comments/clients details)
      </Route>
    </Routes>
>>>>>>> 8700e74 (fix/clients-details)
  );
}

export default App;
