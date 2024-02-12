import { useNavigate } from "react-router-dom";

export const AdminHome = () => {
    const navigate = useNavigate();
    const data= localStorage.getItem("loggedUser");
    return (
        <div>
            <h4>{data}</h4>
            <h1>Welcome {data.username}!!!!You are Admin</h1>

            <a href="/trainerReg">add trainer</a>
        </div>
    );
};