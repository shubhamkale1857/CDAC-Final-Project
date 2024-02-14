import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const InsertFood = ()=>{
    const[flag1, setFlag1]=useState(true);
    const[flag2, setFlag2]=useState(true);
    const[food,setFood]=useState([]);
    const[f1,setF1]=useState("");
    const[f2,setF2]=useState("");
    const[f3,setF3]=useState("");


    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/getfoodlist")
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    },[])


    return(
        <div className="innercomps">
            <h3>Insert Food Component</h3>
            
            <form>
                <table className="table table-borderless">
                <thead>
                <tr>
                <td><label >Enter food</label></td>
                <td><label>Enter quantity</label></td>
                <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><input type="text" className="form-control" list="foods" onChange={(e)=>setF1(e.target.value)}/></td>
                <td><input type="number" className="form-control"/></td>
                <td><input type="button" className="btn btn-primary" value={"add"}/></td>
                </tr>
                </tbody>
            </table>
            {f1}
            <table className="table table-borderless">
                <thead>
                <tr>
                <td><label >Enter food</label></td>
                <td><label>Enter quantity</label></td>
                <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><input type="text" className="form-control" list="trainersList" id="trainerInput" disabled={flag1}/></td>
                <td><input type="number" className="form-control" disabled={flag1}/></td>
                <td><input type="button" className="btn btn-primary" value={"add"} disabled={flag1}/></td>
                </tr>
                </tbody>
            </table>

            <table className="table table-borderless">
                <thead>
                <tr>
                <td><label >Enter food</label></td>
                <td><label>Enter quantity</label></td>
                <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><input type="text" className="form-control" list="trainersList" id="trainerInput" disabled={flag2}/></td>
                <td><input type="number" className="form-control" disabled={flag2}/></td>
                <td><input type="button" className="btn btn-primary" value={"add"} disabled={flag2}/></td>
                </tr>
                </tbody>
            </table>

            </form>

                <datalist id="foods">
                {
                    food.map((f)=>{
                        return(
                            <option value={f.food_name}/>
                        )
                    })
                }
                </datalist>


        </div>
    )
}