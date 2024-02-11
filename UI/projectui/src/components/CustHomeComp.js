import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


export const CustomerHome=()=>{
    const myState = useSelector(state => state.logged)
    return(
        <div>
            <div className="container-fluid">
                <h1>this is Customer's Home component</h1>
            </div>
        
            
        </div>
        

        
    )
}
