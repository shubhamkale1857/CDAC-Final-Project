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

    const handleDate = (a)=>{
        const dateObject = new Date(a);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
        const day = dateObject.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const seconds = dateObject.getSeconds();
        const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        const currentDate = new Date();
        const tyear = currentDate.getFullYear();
        const tmonth = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const tday = String(currentDate.getDate()).padStart(2, '0');
        const tformattedDate = `${tyear}-${tmonth}-${tday}`;

        if(formattedDate === tformattedDate)
        {
            return "Today at "+formattedTime;
        }else{
            return formattedDate+" at "+formattedTime;
        }


    }
    
    return (
        <div className="innercomps">
            <div style={{display:flag?"block":"none"}}>
            <h3>Consultations..</h3><br/>
            <ul>
            {script.map((s)=>{
                return<><span style={{fontSize:14}}>{handleDate(s[1])}</span> <li style={{fontSize:20}}>{s[0]}</li><br/></>

            })}
            </ul>
            </div>
            <div style={{display:flag?"none":"block"}}>
            <h3 style={{color:"green"}}>You don't have a Trainer!!</h3>
            </div>

        </div>
    )
}