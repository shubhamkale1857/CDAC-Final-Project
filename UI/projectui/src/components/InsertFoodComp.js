import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const InsertFood = ()=>{
    const[items, setItems]=useState([]);
    const[food,setFood]=useState([]);
    const[f1,setF1]=useState("");
    const[q1,setQ1]=useState(0);

    const additem = ()=>{
        const newitem = [f1 ,q1 ];
        setItems([...items, newitem]);

    }

    const navigate = useNavigate();
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const submitfood = (e)=>{
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                list : items,
                uid : data.id
            })
        } 
        console.log(reqOption.body);
        fetch("http://localhost:8080/saveTran1",reqOption)
        .then((res)=>{
            if(res.ok){
                console.log("here in react")
                return res.text();
            }else{
                throw new Error("Server Error For Registration");
            }
        })
        .then((msg)=>{
            alert("Data Inserted Successfully!!!")
            console.log("Data Inserted Successfully!!!");
        })
        .catch(error => navigate("/register"))
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
            

            

            <input type="button" className="btn btn-primary" value={"Submit"} onClick={(e)=>{submitfood(e)}} />
            </form>
            


        </div>
    )
}