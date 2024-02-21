import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SelfClients = ()=>{
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[customers,setCustomers] = useState([]);
    useEffect(()=>{
        //console.log("*************************************************88")
        fetch("https://localhost:7283/api/Trainer/getAllClients?uid="+data.id)
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
                        </tr>
                    </tbody>
                )
            }) 
        }</table>
        
    </div>
    )
}