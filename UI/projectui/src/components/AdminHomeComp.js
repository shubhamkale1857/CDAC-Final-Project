import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";

export const AdminHome = () => {
    const navigate = useNavigate();
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const data2= (localStorage.getItem("tregister"));
    const data3= (localStorage.getItem("datainser"));
    const data4= (localStorage.getItem("dataupdate"));
    return (
        <div className="innercomps">
            <h1>Welcome {data.username}!</h1>
            <br/>
            <span style={{color:"green"}}>{data2}</span>
            <span style={{color:"green"}}>{data3}</span>
            <span style={{color:"green"}}>{data4}</span>
        </div>
    );
};