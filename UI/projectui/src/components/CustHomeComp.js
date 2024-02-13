import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CustomerSidebar } from "./CustomerSidebar";


export const CustomerHome=()=>{
    const myState = useSelector(state => state.logged)
    const data= JSON.parse(localStorage.getItem("loggedUser"));

    
    return(
        <div>
            
            <div className="innercomps" >
            
            <h1>Welcome {data.username}!!!!You are Customer</h1>
            </div>
        
            
        </div>
        

        
    )
}
