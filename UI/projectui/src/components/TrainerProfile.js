import { Link, useNavigate } from "react-router-dom";

export const TrainerProfile = () => {
    const navigate = useNavigate();
    const data= localStorage.getItem("loggedUser");
    return (
        <div>
            {console.log(data)}
            <h4>{data}</h4>
            <h1>Welcome {data.username}!!! You are Trainer</h1>
        </div>
    );
};