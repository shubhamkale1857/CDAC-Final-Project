import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const FoodDBDisplay = () =>{

    const navigate = useNavigate();

    const[food,setFood]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:8500/getfoodlist")
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    },[])

    return(
        <div className="innercomps">
            <h1>Foods</h1>

<table className="table table-bordered" >
    <thead>
        <tr>        
            <td>NAME</td>
            <td>SERVING SIZE</td>
            <td>CALORIES</td>
            <td>PROTEIN</td>
        </tr>
    </thead>
    <tbody>
    {
        food.map((f)=>{
            return(
            <tr>
                <td>{f.food_name}</td>
                <td>{f.qty}&nbsp;{f.unit}</td>
                <td>{f.calories}</td>
                <td>{f.protein}</td>
                
            </tr>)
        })
    }
    </tbody>
</table>
        </div>
    )



}