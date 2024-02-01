import { Outlet } from "react-router-dom";
import { Menubar } from "../Components/Menubar/Menubar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Menubar></Menubar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
