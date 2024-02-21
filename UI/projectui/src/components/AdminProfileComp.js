import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export const AdminProfile = ()=>{
    const data = JSON.parse(localStorage.getItem("loggedUser"));
   
    const navigate = useNavigate();
    const[user,setAdmin] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8080/getAdminDetails?uid="+data.id, {
            method: 'GET',
            headers: {Authorization: `Bearer ${data.accessToken}`}
          })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(JSON.stringify(data));
            setAdmin(data);
        })
        .catch(() => navigate("/ErrorPage"))
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
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td colSpan={2} style={{fontSize:30}}>{user.fname}&nbsp;{user.lname}</td>
                </tr>
                <tr style={{height:40}}></tr>
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
                    <td>{user.contact}</td>
                </tr>
                <tr>
                    <td>DATE OF BIRTH</td>
                    <td>{user.dob}</td>
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