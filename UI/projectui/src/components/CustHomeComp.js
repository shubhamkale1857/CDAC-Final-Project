import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const CustomerHome=()=>{
    const myState = useSelector(state => state.logged)
    const data= JSON.parse(localStorage.getItem("loggedUser"));

    
    return(
        <div>
            <div className="container-fluid">
            
            <h1>Welcome {data.username}!!!!You are Customer</h1>
            </div>
        
            
        </div>
        

        
    )
}
