import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar></SideBar>
      <Outlet />
    </div>
  );
};

export default Body;
