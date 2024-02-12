import { Link, useNavigate } from "react-router-dom";

export const TrainerProfile = () => {
    const navigate = useNavigate();
    const data1= localStorage.getItem("data");
    const gotoupdate=()=>{
        navigate("/updatepass");
    }
    return (
        <div>
            <h1>Trainer Profile Component</h1>
        </div>
    );
};