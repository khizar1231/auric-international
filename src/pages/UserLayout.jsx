import { Outlet } from "react-router-dom";
import Navbar from "../components/UserSide/navbar";
import Footer from "../components/UserSide/Footer";
import Whatsapp from "../components/UserSide/Whatsapp";
import { useLocation } from "react-router-dom";

const UserLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <Navbar />
      <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </div>
      <Footer />
      <Whatsapp />
    </>
  );
};

export default UserLayout;