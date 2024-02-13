import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";

export const AdminHome = () => {
    const navigate = useNavigate();
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    return (
        <div>
            <AdminSidebar/>
            <h1>Welcome {data.username}!!!!You are Admin</h1>

            
        </div>
    );
};