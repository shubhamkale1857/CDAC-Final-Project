import { useEffect, useState } from "react";

export const SelectTrainer = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));

    const[trainers,setTrainers]=useState([]);

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

    useEffect(()=>{
        fetch("http://localhost:8080/getTrainers")
        .then(resp => resp.json())
        .then(data => {setTrainers(data)})
    },[])
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
                            </tr>
                        </tbody>
                )
               
                }) 
            }</table>
            
        </div>
    )
}