import { Outlet } from "react-router-dom";

import ClientList from "../components/ClientList/ClientList";

const Layout = () => (
  <>
    <ClientList />
    <Outlet />
  </>
);

export default Layout;
