import { useEffect, useState } from "react";


export const CustomerHome=()=>{
    
    const data= JSON.parse(localStorage.getItem("loggedUser"));

    const[user,setUser]=useState({});

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomer?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {setUser(data)})
    },[])

    
    return(
        <div>
            
            <div className="innercomps" >
            
            <h1>Welcome {user.fname}!!!!</h1>
            </div>
        
            
        </div>
        

        
    )
}
