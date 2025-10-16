// import React, { useState } from "react";
// import SideBar from "../components/SideBar";
// import { Outlet } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { dummyUserData } from "../assets/assets";
// import Loading from "../components/Loading";

// const Layout = () => {
//   const user = dummyUserData;
//   const [sideBarOpen, setSideBarOpen] = useState(false);
//   return user ? (
//     <div className="w-full flex h-screen">
//       <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
//       <div className="flex-1 bg-slate-50">
//         <Outlet />
//       </div>
//       {sideBarOpen ? (
//         <X
//           className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600
//       sm:hidden"
//           onClick={() => setSideBarOpen(false)}
//         />
//       ) : (
//         <Menu
//           className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600
//       sm:hidden"
//           onClick={() => setSideBarOpen(true)}
//         />
//       )}
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Layout;

import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets";
import Loading from "../components/Loading";

const Layout = () => {
  const user = dummyUserData;
  const [sidebarOpen, setSideBarOpen] = useState(false); // <-- rename state

  return user ? (
    <div className="w-full flex h-screen">
      {/* pass the exact prop names SideBar expects */}
      <SideBar sidebarOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} />

      {/* mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[15] bg-black/40 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />
      )}

      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>

      {sidebarOpen ? (
        <X
          className="fixed top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setSideBarOpen(false)}
        />
      ) : (
        <Menu
          className="fixed top-3 right-3 p-2 z-[100] bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setSideBarOpen(true)}
        />
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
