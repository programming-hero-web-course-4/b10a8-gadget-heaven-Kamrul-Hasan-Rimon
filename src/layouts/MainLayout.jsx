import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import toast, { Toaster } from 'react-hot-toast';
export default function MainLayout() {

  return (
    <div className="flex flex-col justify-between h-screen" >
      <div>
        <Toaster />
        <div className="flex flex-col justify-between h-screen bg-gray-100">
          {/* Navber Section */}
          <Navber></Navber>
          {/* Dynamic Section */}
          <div className="h-full">

            <Outlet></Outlet>
          </div>
        </div>
        {/* Footer Section */}

      </div>
      <Footer></Footer>
    </div>
  )
}
