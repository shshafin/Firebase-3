import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Menubar from "../Components/Menubar/Menubar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Toaster />
      <Menubar></Menubar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
