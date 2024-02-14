import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const InsertFood = ()=>{
    const[items, setItems]=useState([]);
    const[food,setFood]=useState([]);
    const[f1,setF1]=useState("");
    const[q1,setQ1]=useState(0);

    const additem = ()=>{
        const newitem = {"food":f1 , "qty":q1 };
        setItems([...items, newitem]);

    }

    const navigate = useNavigate();

    const submitfood = ()=>{

    }

    useEffect(()=>{
        fetch("http://localhost:8080/getfoodlist")
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    },[])


    return(
        <div className="innercomps">
            <h3>Insert Food</h3>
            
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
                <td><select className="form-control" onChange={(e)=>setF1(e.target.value)}>
                    <option value="">Choose a food...</option>
                    {
                        food.map((f)=>{
                            return(
                                <option value={f.food_id}>{f.food_name}</option>
                            )
                        })
                    }
                    </select></td>
                <td><input type="number" className="form-control" onChange={(e)=>setQ1(e.target.value)}/></td>
                <td><input type="button" className="btn btn-primary" value={"add"} onClick={additem}/></td>
                </tr>
                <tr style={{textAlign:"center"}}>
                <td colSpan={2}><input type="reset" className="btn btn-outline-primary" value={"add more"} /></td>
                </tr>
                

                </tbody>
            </table>
            {JSON.stringify(items)}<br/>
            

            

            <input type="button" className="btn btn-primary" value={"Submit"} onClick={submitfood} />
            </form>
            


        </div>
    )
}