import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/axios";
import { ShopContext } from "../../context/ShopContext";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter email and password.");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/user/admin", {
        email,
        password,
      });   
      if (data.success) {
      login(data.user, data.token);

    toast.success("Login Successful");

    navigate("/admin/add");
}
      else {
        toast.error(data.message || "Login Failed");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
        <div className="bg-white shadow-xl rounded-xl px-8 py-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">
            Admin Panel
          </h1>

          <form onSubmit={onSubmitHandler}>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;