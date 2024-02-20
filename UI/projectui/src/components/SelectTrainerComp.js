import { useEffect, useRef, useState } from "react";

export const SelectTrainer = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));

    const[trainers,setTrainers]=useState([]);
    const [buttonClass, setButtonClass] = useState("btn btn-primary");
    const buttonRefs = useRef([]);

    const gender=(gender)=>{
        
        if(gender==='m')
        {
            return "Male";
        }
        else if(gender==='f')
        {
            return "Female";
        }
        else
        {
            return "Other";
        }
    }
<<<<<<< Updated upstream

    const sendrequest=(id)=>{
        const buttonElement = buttonRefs.current[id];
        if(buttonElement)
            setButtonClass(prevClass => prevClass === 'btn btn-primary' ? 'btn btn-warning' : 'btn btn-primary');
    }

=======
>>>>>>> Stashed changes
    useEffect(()=>{
        //console.log("*************************************************88")
        fetch("https://localhost:7283/api/Trainer/Index")
        .then(resp => resp.json())
        .then(data => {setTrainers(data)})
    },[])

    const requestTrainer = (tid,cid)=>{
        console.log("Tid: "+tid+" Cid"+cid);
        fetch("https://localhost:7283/api/Trainer/SaveTrainerReq?tid="+tid+"&cid="+cid)
        .then(res=>{return res.text()})
        .then(data => console.log((data+"************%########################################")))
    }
    return (
        <div className="innercomps">
            <h3>Trainers List...</h3>
            <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>CONTACT</td>
                                <td>SPECIALIZATION</td>
                                <td>EXPERIENCE</td>
                                <td>GENDER</td>
                            </tr>
                        </thead>
            {
                trainers.map((t)=>{
                    return(
                                            
                        <tbody>
                            <tr>
                                <td>{t.fname}&nbsp;{t.lname}</td>
                                <td>{t.email}</td>
                                <td>{t.contactno}</td>
                                <td>{t.specialization}</td>
                                <td>{t.experience}</td>
                                <td>{gender(t.gender)}</td>
<<<<<<< Updated upstream
                                <td><button  ref={(el) => buttonRefs.current[t.trainer_id] = el} className={buttonClass} onClick={()=>{sendrequest(t.trainer_id)}}>REQUEST</button></td>
=======
                                <td><button className="btn btn-primary" onClick={()=>requestTrainer(t.trainerId,data.id)}>REQUEST</button></td>
>>>>>>> Stashed changes
                            </tr>
                        </tbody>
                    )
                }) 
            }</table>
            
        </div>
    )
}

