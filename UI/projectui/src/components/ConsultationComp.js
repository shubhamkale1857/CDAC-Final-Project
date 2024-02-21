import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Consultation = ()=>{

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const[script, setScript]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/getScripts?cid="+user.customer_id+"&tid="+user.trainer.trainer_id)
        .then(resp => resp.json())
        .then(data => {setScript(data)})
        .catch(() => navigate("/ErrorPage"))
    },[])
    
    return (
        <div className="innercomps">
            <h3>Consultations..</h3><br/>
            <h5>{user.trainer.fname} says..</h5>
            <ul>
            {script.map((s)=>{
                return<li style={{fontSize:20}}>{s}</li>

            })}
            </ul>
            
        </div>
    )
}