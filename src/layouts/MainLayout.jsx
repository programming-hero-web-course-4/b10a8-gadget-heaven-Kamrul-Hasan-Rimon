import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import toast, { Toaster } from 'react-hot-toast';
export default function MainLayout() {

  return (
    <div className="flex flex-col content-between h-screen">
      <Toaster />
      <div className="bg-gray-100">
        {/* Navber Section */}
        <Navber></Navber>
        {/* Dynamic Section */}
        
      </div>
      {/* Footer Section */}
      
      <div className="h-full">

          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}
