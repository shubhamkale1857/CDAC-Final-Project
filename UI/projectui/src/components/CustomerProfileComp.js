import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export const CustomerProfile = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const data2= (localStorage.getItem("updates"));
    const navigate = useNavigate();
    const[user,setUser]=useState({});

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomer?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {setUser(data)})
    },[])

    const navigateUpdate = ()=>{
        navigate("/Customer/updateProfile")
    }

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
    const[uu,setUU] = useState({});
    //setUU(user.user);
    return (
        <div className="innercomps">
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td colSpan={2} style={{fontSize:30}}>{user.fname}&nbsp;{user.lname}</td>
                </tr>
                <tr>
                <td colSpan={2} style={{fontSize:15}}>Goal is to {user.goal} weight in a healthy way!</td>
                </tr>
                <tr style={{height:40}}> </tr>
                 <span style={{color:"green", fontSize:20}}>{data2}</span>

                <tr>
                    <td>NAME</td>
                    <td>{user.fname}&nbsp;{user.lname}</td>
                </tr>
                <tr>
                <td>Trainer</td>
                    <td>{user.trainer.fname}&nbsp;{user.trainer.lname}</td>
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
                    <td>HEIGHT</td>
                    <td>{user.height}&nbsp;CM</td>
                </tr>
                <tr>
                    <td>WEIGHT</td>
                    <td>{user.weight}&nbsp;KG</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td>{gender(user.gender)}</td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td>{user.address}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={navigateUpdate}>UPDATE PROFILE</button><br/><br/>

            
        </div>
    )
}