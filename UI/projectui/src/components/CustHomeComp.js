import { useEffect, useState } from "react";


export const CustomerHome=()=>{
    
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[cal,setCal]=useState("0");
    const[prot,setProt]=useState("0");

    const calCalorie1 = ()=>{
        fetch("http://localhost:8080/getTotalCal?cust_id="+user.customer_id)
        .then(resp => resp.text())
        .then(data => {setCal(data)})
        return cal;
    }

    const calProtein = ()=>{
        fetch("http://localhost:8080/getTotalProt?cust_id="+user.customer_id)
        .then(resp => resp.text())
        .then(data => {setProt(data)})
        return prot;
    }

    const calCalorie2 = ()=>{
        let democal=0;
        if(user.gender === 'm')
        {
            var dob = new Date(user.dob);
            var currentDate = new Date();
            var age = currentDate.getFullYear() - dob.getFullYear();
            democal= Math.ceil(((10 * user.weight) + (6.25 * user.height) - (5 * age) +5)*1.37);  
        }
        else{
            var dob = new Date(user.dob);
            var currentDate = new Date();
            var age = currentDate.getFullYear() - dob.getFullYear();
            democal= Math.ceil(((10 * user.weight) + (6.25 * user.height) - (5 * age) -161)*1.37);
        }
        if(user.goal==="Maintain")
            return democal;
        else if(user.goal==="Lose")
            return democal-300;
        else
            return democal+300;
    }

    const[user,setUser]=useState({});
    

    useEffect(()=>{
        fetch("http://localhost:8080/getCustomer?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {
            setUser(data)
            localStorage.setItem("user", JSON.stringify(data))})
    },[])

    
    return(
        <div className="innercomps" >
          {/* {JSON.stringify(user)} */}
            <h2>Welcome {user.fname}!!</h2>
            <p>Here is your today's progress...</p>
            <br/><br/>
            <table style={{width:"auto", marginLeft:100}} className="table table-borderless">
                <tbody>
                <tr>
                    <td>
                        <div className="dashboardDivs">
                            Calories Consumed
                            <br/><br/>
                            <div className="dash">{calCalorie1()}&nbsp;kcal</div>
                        </div>   
                    </td>
                    <td>
                        <div className="dashboardDivs">
                            Protein Consumed
                            <br/><br/>
                            <span className="dash">{calProtein()}&nbsp;gm</span>
                        </div>   
                    </td>
                    
                </tr>
                <tr>
                <td>
                    <div className="dashboardDivs">
                            Remaining Calories
                            <br/><br/>
                            <span className="dash">{calCalorie2()-calCalorie1()}&nbsp;kcal</span>
                        </div>   
                    </td>
                    <td>
                        <div className="dashboardDivs">
                            Weight
                            <br/><br/>
                            <span className="dash">{user.weight}&nbsp;KG</span>
                        </div>   
                    </td>
                </tr>
                </tbody>
            </table>
            
            
        </div>
        

        
    )
}
