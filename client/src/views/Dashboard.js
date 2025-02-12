import React, { useEffect, useState } from "react";
import { getCurrentUser, logout } from "../utils/common";
import { IdCard, KeySquare, LogOut, MailIcon, TruckIcon } from "lucide-react";
import toast,{Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
    }else{
      toast.error("Please login to access this page");
       setTimeout(() => {
        window.location.href = '/login';
      }, 2000)
    }
  }, []);

  return (
    <div>
      <h1 className="text-center my-4 text-3xl">Dashboard</h1>

      <div className="bg-white w-[500px] mx-auto p-10 rounded-lg shadow-lg">
       
       <div className="flex justify-center items-center bg-gray-100 mb-10">
         <Link to="/orders" className="block text-center text-xl mb-4 mx-2">
          <TruckIcon size={32} className="mx-auto inline"/>
          <span>My Orders</span>
         </Link>
         <Link to="/orders" className="block text-center text-xl mb-4 mx-2">
          <TruckIcon size={32} className="mx-auto inline"/>
          <span>My Orders</span>
         </Link>
         <Link to="/orders" className="block text-center text-xl mb-4 mx-2">
          <TruckIcon size={32} className="mx-auto inline"/>
          <span>My Orders</span>
         </Link>
       </div>
       
       <p>
          <IdCard className="inline mr-2"/> {user?.name}
        </p>
        <p>
          <MailIcon className="inline mr-2"/> {user?.email}
        </p>
        <p>
          <KeySquare className="inline mr-2"/> {user?.role}
        </p>
        <button type="button" className="mx-auto block bg-red-500 text-white p-2 pl-5 pr-5"
        onClick={()=>{
            toast.success("Logout Successfully");
            logout();
        }}

        >
            <LogOut className="inline mr-2"/>
            Logout</button>
      </div>
      <Toaster/>
    </div>
  );
}

export default Dashboard;
