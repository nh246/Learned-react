import Header from "./Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default Layout;
