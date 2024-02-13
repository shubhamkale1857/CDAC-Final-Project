import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const FoodDBDisplay = () =>{

    const[val,setVal]=useState(0);
    const navigate = useNavigate();

    const[food,setFood]=useState([]);

    const decrement = ()=>
    {
        setVal(val-1);
    }
    const increment = ()=>
    {
        setVal(val+1);
    }

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
            <td>QUANTITY</td>
            <td>ADD</td>
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
                <td><button className="btn btn-light" onClick={decrement}>-</button>{val}<button className="btn btn-light" onClick={increment}>+</button></td>
                <td><button className="btn btn-primary">ADD</button></td>
                
                
            </tr>)
        })
    }
    </tbody>
</table>
        </div>
    )



}