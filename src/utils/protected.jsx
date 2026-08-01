import { Navigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Protected = ({ children }) => {
  const { user } = useContext(ShopContext);

  // 🔐 Not logged in
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // 👑 Admin has full access
  if (user.role !== "admin") {
      return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default Protected;
