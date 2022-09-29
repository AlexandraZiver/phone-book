import { Outlet, Link } from "react-router-dom";

import ClientList from "../components/ClientList/ClientList";

const Layout = () => (
  <>
    <Link to="/">
      <ClientList />
    </Link>
    <Outlet />
  </>
);

export default Layout;
