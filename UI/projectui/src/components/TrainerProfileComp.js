import { useEffect, useState } from "react";

export const TrainerProfile = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[user,setUser] = useState({});
    useEffect(()=>{
        fetch("https://localhost:7283/api/Trainer/getOneTrainer?uid="+data.id)
        .then(res => res.json())
        .then(ans => setUser(ans))
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
            {/* <div>{JSON.stringify(user)}</div> */}
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td colSpan={2} style={{fontSize:30}}>{data.username}</td>
                </tr>
                
                <tr style={{height:40}}> </tr>
                 <span style={{color:"green", fontSize:20}}></span>

                <tr>
                    <td>NAME</td>
                    <td>{user.fname}&nbsp;{user.lname}</td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>CONTACT NO</td>
                    <td>{user.contactno}</td>
                </tr>
                <tr>
                    <td>DATE OF BIRTH</td>
                    <td>{user.dob}</td>
                </tr>
                <tr>
                    <td>SPECIALIZATION</td>
                    <td>{user.specialization}</td>
                </tr>
                <tr>
                    <td>EXPERIENCE</td>
                    <td>{user.experience} YRS</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>{gender(user.gender)}</td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td>{user.address}</td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}