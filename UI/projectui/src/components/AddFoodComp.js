import { useEffect, useReducer,useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const AddFood = ()=>{
    const data = JSON.parse(localStorage.getItem("loggedUser"));
    let navigate = useNavigate();
    const[unit,setUnit] = useState("");
    const[category,setCategory] = useState(0);
    const[fname,setFname] = useState("");
    const[calory,setcalory] = useState(0);
    const[protein,setProtein] = useState(0);
    const[cat,setCat] = useState([]);
    const[msg,setMsg] = useState("");
    useEffect(()=>{
        fetch("http://localhost:8080/getCategories")
        .then((res)=>{
                return res.json();
        })
        .then((msg)=>{
            //alert("Data Fetched!!!")
            setCat(msg);
            console.log(JSON.stringify(msg));
            console.log("*****************************");
            console.log(JSON.stringify(cat));
        })
        .catch(error => navigate("/"))
    },[])
    const submitData = (e)=>{
        if(fname === "" || calory===0 || protein===0 || category===0 || unit == ""){ setMsg("Enter all the fields first..")}else{
            setMsg("")
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json", Authorization: `Bearer ${data.accessToken}`},
            body : JSON.stringify({
                fname : fname,
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
            // alert("Data Inserted Successfully!!!")
            console.log("Data Inserted Successfully!!!");
        })
        .catch(error => navigate("/Admin/AddFood"))

        localStorage.setItem("datainser","Data Inserted Successfully!!!");
        navigate("/Admin/AdminHome");   
    }}
    return(
        <div className="innercomps">
            <div className="container-fluid">
            <h1 >Add Food Item</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-5 mt-6"> 
            {/* <div>{JSON.stringify(cat)}</div> */}
            <form>
                    <label className="form-label" for="fname">Enter Food Name</label>
                    <input required type="text" className="form-control" id="fname" name="fname" maxLength={45} onChange={(e)=>{setFname(e.target.value)}}/><br/>
                    
                    <label className="form-label" for="specialization">Select Unit</label>
                    <select className="form-control" required={true} onChange={(e)=>{setUnit(e.target.value)}}>
                        <option value={""}>Select Unit</option>
                        <option value={"100ml"} className="form-check-input">100ml</option>
                        <option value={"cup (approx 250gm)"} className="form-check-input">cup (approx 250gm)</option>
                        <option value={"100gms"} className="form-check-input">100gms</option>
                        <option value={"unit"} className="form-check-input">unit</option>
                    </select><br/>

                    <label className="form-label" for="protein">Enter Protein</label>
                    <input required type="number" className="form-control" id="protein" name="protein" min={0} onChange={(e)=>{setProtein(e.target.value)}}/><br/>

                    <label className="form-label" for="calories">Enter Calories</label>
                    <input required type="number" className="form-control" id="calories" name="calories" min={0} onChange={(e)=>{setcalory(e.target.value)}}/><br/>

                    <label className="form-label" for="calories" >Select Category</label>
                    <select className="form-control" onChange={(e)=>{setCategory(e.target.value)}}>
                        <option value={""}>Select Category</option>
                        {
                            cat.map((v)=>{
                               return <option value={v.category_id}>{v.category_name}</option>
                            })
                        }
                    </select><br/>
                    <span  style={{color:"red"}}>{msg}</span>
                    <br/><br/>

                    <input type="button" value={"Add Item"} className="btn btn-primary" onClick={(e)=>{submitData(e)}}/>
                    {/* disabled={!customer.formValid} */}
                    <input type="reset" className="btn btn-danger "/>
                </form></div>
        </div>
        </div>
        
    )
}