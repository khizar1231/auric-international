/** @format */

import { useState } from "react";
import ScrollToTop from "./components/UserSide/ScrollToTop";
import "./App.css";
import SportswearWebsite from "./pages/UserPages/sports";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UserSide/navbar";
import About from "./pages/UserPages/About";
import Footer from "./components/UserSide/Footer";
import Whatsapp from "./components/UserSide/Whatsapp";
import Contact from "./pages/UserPages/Contact";
import ServicesSection from "./components/UserSide/ServicesSection";
import Collection from "./pages/UserPages/Collection";
import Product from "./pages/UserPages/Product";
import UserLayout from "./pages/UserLayout";
import AdminLayout from "./pages/AdminLayout";
import Login from "./components/AdminSide/Login";
import Add from "./pages/AdminPages/Add";
import List from "./pages/AdminPages/List";
import { ToastContainer } from "react-toastify";
import Root from "./utils/root";
import Protected from "./utils/protected";
import NotFound from "./pages/NotFound";
import BulkImport from "./pages/AdminPages/BulkImport";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        draggable
        theme="light"
      />
      <ScrollToTop/>
      <Routes>
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<SportswearWebsite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ServicesSection />} />
        <Route path="/product" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
      </Route>

      {/* Admin Login */}
      <Route path="/admin" element={<Root />} />
      <Route path="/admin/login" element={<Login />} />
      <Route
          path="/unauthorized"
          element={
            <p className="font-bold text-3xl mt-20 ml-20">Unauthorizeds</p>
          }
        />
      {/* Protected Admin Routes */}
      <Route element={<AdminLayout />}>
      <Route path="/admin/add" element={<Protected><Add/></Protected>}></Route>
      <Route path="/admin/list" element={<Protected><List/></Protected>}></Route>
      <Route path="/admin/bulk-import" element={<Protected><BulkImport/></Protected>}></Route>
      </Route>
<Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
