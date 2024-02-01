import { Outlet } from "react-router-dom";
import Menubar from "../Components/Menubar/Menubar";

const MainLayout = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
