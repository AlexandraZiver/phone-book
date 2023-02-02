import React from "react";
import { Outlet } from "react-router-dom";

import ClientList from "../components/ClientList/ClientList";

const Layout = () => {
  return (
    <>
      <ClientList />
      <Outlet />
    </>
  );
};

export default Layout;
