import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";

export default function MainLayout() {

  return (
    <div>
      <div className="bg-gray-100">
        {/* Navber Section */}
        <Navber></Navber>
        {/* Dynamic Section */}
        <div className="h-[1000px]">
  
          <Outlet></Outlet>
        </div>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  )
}
