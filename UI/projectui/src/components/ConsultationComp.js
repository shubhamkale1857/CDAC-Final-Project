import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Consultation = ()=>{

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const[flag,setFlag]=useState(true);
    const[script, setScript]=useState([]);
    useEffect(()=>{
        console.log("User Trainer:   "+user.trainer);
        if(user.trainer===null)
        {
            setFlag(false);
        }
        else{
            setFlag(true);
            fetch("http://localhost:8080/getScripts?cid="+user.customer_id+"&tid="+user.trainer.trainer_id)
            .then(resp => resp.json())
            .then(data => {setScript(data)})
            .catch(() => navigate("/ErrorPage"))
        }
    },[])
    
    return (
        <div className="innercomps">
            <div style={{display:flag?"block":"none"}}>
            <h3>Consultations..</h3><br/>
            <h5> says..</h5>
            <ul>
            {script.map((s)=>{
                return<li style={{fontSize:20}}>{s}</li>

            })}
            </ul>
            </div>
            <div style={{display:flag?"none":"block"}}>
            <h3 style={{color:"green"}}>You don't have a Trainer!!</h3>
            </div>

        </div>
    )
}