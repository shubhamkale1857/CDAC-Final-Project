import { Link, useNavigate } from "react-router-dom";
import { TrainerSidebar } from "./TrainerSidebar";


export const TrainerHome = () => {
    const navigate = useNavigate();
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    return (
        <div className="innercomps">
            <TrainerSidebar/>
            <h1>Welcome {data.username}!!! You are Trainer</h1>
        </div>
    );
};