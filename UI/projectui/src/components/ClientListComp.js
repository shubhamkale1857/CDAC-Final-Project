import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export const ClientList = ()=>{
    const navigate = useNavigate();
    const[req,setReq] = useState({});
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[customers,setCustomers] = useState([]);
    useEffect(()=>{
        //console.log("*************************************************88")
        fetch("https://localhost:7283/api/Trainer/getReq?tid="+data.id)
        .then(resp => resp.json())
        .then(data => {setCustomers(data)})
    },[])
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
    const[ap,setAp] = useState(true);
    const approve = (cid)=>{
        fetch("https://localhost:7283/api/Trainer/approve?tid="+data.id+"&cid="+cid)
        .then(resp => resp.text())
        .then(data => {
            if(data === "Success"){
                navigate("/Trainer/TrainerHome");
            }
        })
    }
    const deny = (cid)=>{
        fetch("https://localhost:7283/api/Trainer/deny?tid="+data.id+"&cid="+cid)
        .then(resp => resp.text())
        .then(data => {
            if(data === "Denied"){
                navigate("/Trainer/TrainerHome");
            }
        })
    }
    return (
        <div className="innercomps">
            <h3>Client Requests...</h3>
            <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>NAME</td>
                                <td>EMAIL</td>
                                <td>CONTACT</td>
                                <td>HEIGHT</td>
                                <td>WEIGHT</td>
                                <td>GENDER</td>
                                <td>GOAL</td>
                                <td>APPROVE</td>
                                <td>DENY</td>
                            </tr>
                        </thead>
            {
                customers.map((t)=>{
                    return(
                                            
                        <tbody>
                            <tr>
                                <td>{t.fname}&nbsp;{t.lname}</td>
                                <td>{t.email}</td>
                                <td>{t.contactno}</td>
                                <td>{t.height}</td>
                                <td>{t.weight}</td>
                                <td>{gender(t.gender)}</td>
                                <td>{t.goal}</td>
                                <td><button className="btn btn-primary" onClick={()=>{approve(t.customerId);}}>Aprove</button></td>
                                <td><button className="btn btn-danger" onClick={()=>{deny(t.customerId);}}>Deny</button></td>
                            </tr>
                        </tbody>
                    )
                }) 
            }</table>
            
        </div>
    )
}