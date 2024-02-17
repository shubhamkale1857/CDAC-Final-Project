import { useEffect, useState } from "react";


export const CustomerHome=()=>{
    
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[cal,setCal]=useState("0");

    const calCalorie1 = ()=>{
        fetch("http://localhost:8080/getTotalCal?cust_id="+user.customer_id)
        .then(resp => resp.text())
        .then(data => {setCal(data)})
        return cal;
    }

    const calCalorie2 = ()=>{
        if(user.gender === 'm')
        {
            var dob = new Date(user.dob);
            var currentDate = new Date();
            var age = currentDate.getFullYear() - dob.getFullYear();
            return Math.ceil(((10 * user.weight) + (6.25 * user.height) - (5 * age) +5)*1.37);  
        }
        else{
            var dob = new Date(user.dob);
            var currentDate = new Date();
            var age = currentDate.getFullYear() - dob.getFullYear();
            return Math.ceil(((10 * user.weight) + (6.25 * user.height) - (5 * age) -161)*1.37);
        }
    }

    const[user,setUser]=useState({});
    

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomer?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {
            setUser(data)})
    },[])

    
    return(
        <div className="innercomps" >
          {JSON.stringify(user)}
            <h2>Welcome {user.fname}!!</h2>
            <br/><br/>
            <table className="table table-borderless">
                <tbody>
                <tr>
                    <td>
                        <div className="dashboardDivs">
                            <b>Calories Eaten</b>
                            <br/><br/>
                            <span style={{fontSize:30}}>{calCalorie1()}</span>
                        </div>   
                    </td>
                    <td>
                        <div className="dashboardDivs">
                            <b>Calories Remaining</b>
                            <br/><br/>
                            <span style={{fontSize:30}}>{calCalorie2()-calCalorie1()}</span>
                        </div>   
                    </td>
                    <td>
                        <div className="dashboardDivs">
                            <b>Weight</b>
                            <br/><br/>
                            <span style={{fontSize:30}}>{user.weight}KG</span>
                        </div>   
                    </td>
                    
                </tr>
                </tbody>
            </table>
            
            
        </div>
        

        
    )
}
