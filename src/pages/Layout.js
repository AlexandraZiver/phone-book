import { Outlet, Link } from "react-router-dom";

import ClientList from "../components/ClientList/ClientList";

const Layout = () => (
  <>
    <Link to="/clients">
      <ClientList />
    </Link>
    <Outlet />
  </>
);

export default Layout;
