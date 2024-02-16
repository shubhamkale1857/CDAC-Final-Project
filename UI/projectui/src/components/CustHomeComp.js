import { useEffect, useState } from "react";


export const CustomerHome=()=>{
    
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const calCalorie = ()=>{
        
    }

    const[user,setUser]=useState({});

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomer?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {setUser(data)})
    },[])

    
    return(
        <div className="innercomps" >
            <h2>Welcome {user.fname}!!</h2>
            <br/><br/>
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            
            
        </div>
        

        
    )
}
