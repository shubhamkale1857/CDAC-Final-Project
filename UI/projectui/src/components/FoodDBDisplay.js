import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export const FoodDBDisplay = () =>{

    const navigate = useNavigate();

    const[food,setFood]=useState([]);
    const[val, setVal]=useState("");

    const loadFood = () =>{
        fetch("http://localhost:8500/getsearchfoodlist?fname="+val)
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    }

    useEffect(()=>{
        fetch("http://localhost:8080/getfoodlist")
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    },[])

    return(
        <div className="innercomps">
            <h1>Foods</h1>
            <br/>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" onChange={(e)=>{setVal(e.target.value); loadFood()}}/>
                <input class="btn btn-primary" type="button" onClick={loadFood} value={"search"}/>
            </form>
            <br/><br/>
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