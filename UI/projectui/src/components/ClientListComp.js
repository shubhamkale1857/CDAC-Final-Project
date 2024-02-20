import { useEffect, useState } from "react";
export const ClientList = ()=>{
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
    const approve = (cid)=>{
        fetch("https://localhost:7283/api/Trainer/approve?tid="+data.id+"&cid="+cid)
        .then(resp => resp.json())
        .then(data => {setCustomers(data)})
    }
    return (
        <div className="innercomps">
            <h3>ClientList List...</h3>
            <div>{JSON.stringify(customers)}</div>
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
                                <td><button className="btn btn-primary" onClick={()=>{approve(t.customerId)}}>Aprove</button></td>
                                <td><button className="btn btn-danger">Deny</button></td>
                            </tr>
                        </tbody>
                    )
                }) 
            }</table>
            
        </div>
    )
}