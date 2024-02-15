import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export const InsertFood = ()=>{
    const[items, setItems]=useState([]);
    const[food,setFood]=useState([]);
    const[f1,setF1]=useState("");
    const[q1,setQ1]=useState("");
    const[mt,setMt]=useState("");

    const additem = ()=>{
        const newitem = [f1 ,q1 ];
        let flag=false;
        let arr=items.map((s)=>{
            if(s[0]===newitem[0])
            {
                flag=true;
                return s=[s[0],String(parseInt(s[1])+parseInt(newitem[1]))]
            }
            else
            {
                return s;
            }
        })
        if(!flag)
            setItems([...items, newitem]);
        else
            setItems(arr);

        formRef.current.reset();
        
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
                uid : data.id,
                mealtype : mt
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
            setItems([]);
        })
        .catch(error => navigate("/register"))
    }

    useEffect(()=>{
        fetch("http://localhost:8080/getfoodlist")
        .then(resp => resp.json())
        .then(data => setFood(data))
        .catch(() => navigate("/ErrorPage"))
    },[])

    const formRef = useRef(null);

    return(
        <div className="innercomps">
            <h3>Insert Food</h3>
            
            <form ref={formRef}>

                
                

                <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td><label>Enter Meal Type</label></td>
                    </tr>
                    <tr>
                        <td><select className="form-control" onChange={(e)=>setMt(e.target.value)}>
                    <option value="">Choose a meal type..</option>
                    <option value="1">Breakfast</option>
                    <option value="2">Lunch</option>
                    <option value="3">Snack</option>
                    <option value="4">Dinner</option>
                    </select></td>
                    </tr>
                    <tr>
                    <td><label >Enter food</label></td>
                    <td><label>Enter quantity</label></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td><select className="form-control" onChange={(e)=>setF1(e.target.value)}>
                        <option value="">Choose a food...</option>
                        {
                            food.map((f)=>{
                                return(
                                    <option value={f.food_id}>{f.food_name}&nbsp; / {f.unit} &nbsp; = {f.calories} calories  </option>
                                )
                            })
                        }
                        </select></td>
                        
                    <td><input type="number" className="form-control" onChange={(e)=>setQ1(e.target.value)}/></td>
                    <td><input type="button" className="btn btn-primary" value={"add"} onClick={additem}/></td>
                    </tr>

                </tbody>
            </table>
            {/* {JSON.stringify(items)}<br/> */}
            
            <h4>Added Food</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>FOOD</td>
                        <td>QUATITY</td>
                        <td>CALORIES</td>
                    </tr>
                </thead>
                <tbody>
                   
                        {
                            items.map((s)=>{
                              return <tr>
                                <td>{
                                    food.map((f)=>{
                                        if(f.food_id==s[0])
                                            return f.food_name 
                                    })
                                    }</td>
                                <td>{s[1]}</td>
                                <td>{
                                    food.map((f)=>{
                                        if(f.food_id==s[0])
                                            return f.calories*s[1] 
                                    })
                                    }</td>
                                </tr>
                            })
                        }
                        
                   
                </tbody>
            </table>

            

            <input type="button" className="btn btn-primary" value={"Submit"} onClick={(e)=>{submitfood(e)}} />
            </form>
            
            <datalist id="foodlist">
                    {food.map((f) => (
                <option key={f.food_id} value={f.food_id} >{f.food_name}</option>
                ))}
            </datalist>

        </div>
    )
}