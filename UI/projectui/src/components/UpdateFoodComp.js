import { useEffect, useReducer,useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const UpdateFood = ()=>{
    const data = JSON.parse(localStorage.getItem("loggedUser"));
    let navigate = useNavigate();
    const[foodlist,setFoodlist] = useState([]);
    const[foodObj,setFoodObj] = useState({});
    const[foodid,setFoodId] = useState(0);
    const[unit,setUnit] = useState("");
    const[category,setCategory] = useState(0);
    const[fname,setFname] = useState("");
    const[calory,setcalory] = useState(0);
    const[protein,setProtein] = useState(0);
    const[cat,setCat] = useState([]);
    const[msg,setMsg] = useState("");
    const[msg2,setMsg2] = useState("");

    const createObj = (id) => {
        foodlist.map((f)=>{
           if(f.food_id === id){
                setFoodObj(f);
            }
        })
        // console.log("************************************###########################************************************");
        // for(var i = 0 ; i < foodlist.length ; i++){
        //     console.log(typeof(foodlist[i].food_id) + " ------------ "+ typeof(id))
        //     if(foodlist[i].food_id === id){
        //         setFoodObj(foodlist[i]);
        //         console.log("************************************%%%%%%%%%%%%%%%%************************************");
        //         console.log(JSON.stringify(foodlist[i]));
        //     }
        // }
    }

    useEffect(()=>{
        fetch("http://localhost:8080/getCategories")
        .then((res)=>{
                return res.json();
        })
        .then((msg)=>{
            //alert("Data Fetched!!!")
            setCat(msg);
        })
        .catch(() => navigate("/ErrorPage"))

        fetch("http://localhost:8080/getfoodlist")
        .then((res)=>{
                return res.json();
        })
        .then((msg)=>{
            //alert("Data Fetched!!!")
            setFoodlist(msg);
        })
        .catch(() => navigate("/ErrorPage"))
    },[])
    const submitData = (e)=>{
        if(foodid===0){setMsg2("select food First!")}else{setMsg2("")}
        if(unit==="" || calory===""){setMsg("please select unit and category both!!")}else{
            setMsg("")
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json", Authorization: `Bearer ${data.accessToken}`},
            body : JSON.stringify({
                foodid : foodid,
                fname : foodObj.food_name,
                unit : unit,
                protein : protein,
                calory : calory,
                category : category
            })
        }
        console.log(reqOption);
        fetch("http://localhost:8080/saveFoodItem",reqOption)
        .then((res)=>{
            if(res.ok){
                console.log("here in react")
                return res.text();
            }else{
                throw new Error("Server Error For Registration");
            }
        })
        .then((msg)=>{
            //alert("Data Inserted Successfully!!!")
            console.log("Data Inserted Successfully!!!");
        })
        .catch(() => navigate("/ErrorPage"))

        localStorage.setItem("dataupdate","Data Updated Successfully!!!");
        navigate("/Admin/AdminHome"); }  
    }
    return(
        <div className="innercomps">
            <div className="container-fluid" >
            <h1>Update Food Item</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-4 mt-5"> 
            {/* <div>{JSON.stringify(cat)}</div> */}
            <form>
                    <label className="form-label" for="fname">Select Food Item to Update</label>
                    <select className="form-control" required={true} onChange={(e)=>{setFoodId(e.target.value); createObj(parseInt(e.target.value)); console.log(JSON.stringify(foodObj))}}>
                    <option>select fooditem..</option>
                        {
                            foodlist.map((f)=>{
                                return <option value={f.food_id}>{f.food_name}</option>
                            })
                        }
                    </select><span  style={{color:"red"}}>{msg2}</span><br/>

                    <label className="form-label" for="fname">Food Name</label>
                    <input required type="text" className="form-control" defaultValue={foodObj.food_name} id="fname" name="fname" minLength={1} maxLength={45} onChange={(e)=>{setFname(e.target.value)}} disabled/><br/>
                    
                    <label className="form-label" for="specialization">Select Unit</label>
                    <select className="form-control" required={true} onChange={(e)=>{setUnit(e.target.value)}}>
                        <option value={""}>Select Unit</option>
                        <option value={"100ml"} className="form-check-input">100ml</option>
                        <option value={"cup (approx 250gm)"} className="form-check-input">cup (approx 250gm)</option>
                        <option value={"100gms"} className="form-check-input">100gms</option>
                        <option value={"unit"} className="form-check-input">unit</option>
                    </select><br/>

                    <label className="form-label" for="protein">Enter Protein</label>
                    <input required type="number" className="form-control" id="protein" defaultValue={foodObj.protein} name="protein" min={0} onChange={(e)=>{setProtein(e.target.value)}}/><br/>

                    <label className="form-label" for="calories">Enter Calories</label>
                    <input required type="number" className="form-control" id="calories" defaultValue={foodObj.calories} name="calories" min={0} onChange={(e)=>{setcalory(e.target.value)}}/><br/>

                    <label className="form-label" for="calories" >Select Category</label>
                    <select className="form-control" onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={""}>Select Category</option>
                        {
                            cat.map((v)=>{
                               return <option value={v.category_id}>{v.category_name}</option>
                            })
                        }
                    </select><br/>
                    <span  style={{color:"red"}}>{msg}</span><br/><br/>
                    <input type="button" value={"Update Item"} className="btn btn-primary" onClick={(e)=>{submitData(e)}}/>
                    {/* disabled={!customer.formValid} */}
                    <input type="reset" className="btn btn-danger "/>
                </form></div>
        </div>
        </div>
        
    )
}