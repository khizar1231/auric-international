// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/AdminSide/Sidebar";
// import Navbar from "../components/AdminSide/Navbar";
// const AdminLayout = () => {
//   return (
//     <div className='bg-gray-50 min-h-screen'>
//       <Navbar></Navbar>  
//             <hr />
//     <div className="flex w-full">
//       <Sidebar />
//       <div className="w-70% mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
//         <Outlet />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AdminLayout;
import { Outlet } from "react-router-dom";
import Sidebar from "../components/AdminSide/Sidebar";
import Navbar from "../components/AdminSide/Navbar";

const AdminLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <hr />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;