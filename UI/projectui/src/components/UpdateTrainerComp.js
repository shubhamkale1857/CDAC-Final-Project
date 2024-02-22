import { useEffect, useReducer,useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export const UpdateTrainer = ()=>{
    const data = JSON.parse(localStorage.getItem("loggedUser"));
    const[initCust,setInitCust] = useState({});
    const[trainer_id,setTrainerId] = useState(0);
    let navigate = useNavigate();
    const init = {
        fname : {value:"",error:"",touched:false,valid:false}, 
        lname : {value:"",error:"",touched:false,valid:false}, 
        email : {value:"",error:"",touched:false,valid:false}, 
        dob : {value:"",error:"",touched:false,valid:false},  
        contact : {value:"",error:"",touched:false,valid:false},
        specialization : {value:"",error:"",touched:false,valid:false},                                                             
        experience : {value:"",error:"",touched:false,valid:false},
        address : {value:"",error:"",touched:false,valid:false},
        username : {value:"",error:"",touched:false,valid:false}, 
        formValid : false 
    }
    const reducer = (state,action) =>{
        switch (action.type){
            case 'update':
                const {key,val,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value:val,error,touched,valid},formValid}
            case 'reset':
                return init;
            default:
                break;
        }
    }
    const[customer,dispatch] = useReducer(reducer,init);
    useEffect(()=>{
        fetch("http://localhost:8080/updateTrainer?uid="+data.id)
        .then((res)=>{
            if(res.ok){
                console.log("here in react")
                return res.json();
            }else{
                throw new Error("Server Error For Registration");
            }
        })
        .then((obj)=>{
            setInitCust(obj);
            setTrainerId(obj.trainer_id);
            dispatch({type:"update",data:{key:"fname",val:obj.fname,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"lname",val:obj.lname,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"email",val:obj.email,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"contact",val:obj.contactno,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"specialization",val:obj.specialization,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"experience",val:obj.experience,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"address",val:obj.address,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"dob",val:obj.dob,touched:true,valid:true,error:"",formValid:true}});
            dispatch({type:"update",data:{key:"username",val:data.username,touched:true,valid:true,error:"",formValid:true}});
            setGender(obj.gender)
        })
        .catch(() => navigate("/ErrorPage"))
    },[])
    const validate1 = (key,val)=>{
        let valid = true;
        let error = "";
        switch(key){
            case 'fname':
                var pattern = /^[A-Z]{1}[a-z]+/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "First Name not valid!!!"
                }
                break;               
            case 'lname':
                pattern = /^[A-Z]{1}[a-z]+/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "Last Name not valid!!!"
                }
                break;          
            case 'username':
                pattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "username not valid!!!"
                }
                break;
            case 'email':
                pattern = /^[\w.]{4,}@[a-z]{4,}\.[a-z]{2,}/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "email not valid!!!"
                }
                break;             
            case 'dob':
                var cuDate = new Date();
                var enteredDate = new Date(val);
                let diff = cuDate.getFullYear() - enteredDate.getFullYear();
                if(cuDate < enteredDate){
                    valid = false;
                    error = "BithDate Should not be in future!!!"
                }else if(diff < 10){
                    console.log(diff+" hello  ")
                    valid = false;
                    error = "Persons age need to be above 10"
                }else if((cuDate.getFullYear() - enteredDate.getFullYear()) > 100){
                    valid = false;
                    error = "Persons age need to be below 100"
                }
                break;           
            case 'contact':
                pattern = /^[0-9]{10}$/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "Contact not valid!!!"
                }
                break;
            case 'specialization':
                console.log(val);
                if(val === ""){
                    valid = false;
                    error = "Plz Select Option!!!";
                }
                break;
            case 'experience':
                if(val < 0 || val > 21){
                    valid = false;
                    error = "Enter Valid Experience in Number between 0 to 21 years";
                }
                break;
            default:
                break;
        }
        return {valid: valid,error: error};
    }
    const handleChange = (key,val)=>{
        const{valid,error} = validate1(key,val);
        let formValid = true;
        for(let v in customer){
            if(customer[v].valid === false){
                formValid = false;
                break;
            }
        }
        dispatch({type:"update",data:{key,val,touched:true,valid,error,formValid}})
    }
    
    const submitData = (e)=>{
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                trainer_id : trainer_id,
                fname : customer.fname.value,
                lname : customer.lname.value,
                email : customer.email.value,
                contactno:customer.contact.value,
                dob : customer.dob.value,
                gender:gender,
                specialization: customer.specialization.value,
                experience: customer.experience.value,
                address: customer.address.value,
                username : customer.username.value,
            })
        }
        console.log(reqOption);
        fetch("http://localhost:8080/saveTrainer1", reqOption)
        .then((res)=>{
            if(res.ok){
                console.log("here in react")
                return res.text();
            }else{
                throw new Error("Server Error For Registration");
            }
        })
        .then((msg)=>{
            console.log("Data Inserted Successfully!!!");
        })
        .catch(() => navigate("/ErrorPage"))

        //alert("Trainer registered succesfully!!")
        localStorage.setItem("tregister","Trainer registered succesfully!!");
        navigate("/Trainer/TrainerHome");   
    }
    const[gender,setGender] = useState("");
    return(
        // style={{background:url('https://cdn.pixabay.com/photo/2023/11/10/01/47/homeless-8378586_640.png') center center no-repeat}}
        
        <div className="innercomps">
            <div className="container-fluid">
            <h1 >Trainer Registeration</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-6 mt-5"> 
            <form>
                    <label className="form-label" for="fname">Enter First Name</label>
                    <input type="text" className="form-control" id="fname" name="fname" defaultValue={initCust.fname} onChange={(e)=>{handleChange("fname",e.target.value)}} onBlur={(e)=>{handleChange("fname",e.target.value)}}/><br/>
                    <div style={{display: (!customer.fname.valid && customer.fname.touched)?"block":"none"}}><p className="text-danger">{customer.fname.error}</p></div>

                    <label className="form-label" for="lname">Enter Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lname" defaultValue={initCust.lname} onChange={(e)=>{handleChange("lname",e.target.value)}} onBlur={(e)=>{handleChange("lname",e.target.value)}}/><br/>
                    <div style={{display: (!customer.lname.valid && customer.lname.touched)?"block":"none"}}><p className="text-danger">{customer.lname.error}</p></div>


                    <label className="form-label" for="email">Enter Your Email</label>
                    <input type="email" className="form-control" id="email" name="email" readOnly defaultValue={initCust.email} onChange={(e)=>{handleChange("email",e.target.value)}} onBlur={(e)=>{handleChange("email",e.target.value);}}/><br/>
                    <div style={{display: (!customer.email.valid && customer.email.touched)?"block":"none"}}><p className="text-danger">{customer.email.error}</p></div>

                    <label className="form-label" for="contact">Enter Contact Number</label>
                    <input type="text" className="form-control" id="contact" name="contact" defaultValue={initCust.contactno} onChange={(e)=>{handleChange("contact",e.target.value)}} onBlur={(e)=>{handleChange("contact",e.target.value)}}/><br/>
                    <div style={{display: (!customer.contact.valid && customer.contact.touched)?"block":"none"}}><p className="text-danger">{customer.contact.error}</p></div>

                    <label className="form-label" for="add">Enter Date of Birth</label>
                    <input type="date" className="form-control" id="dob" name="dob" defaultValue={initCust.dob} onChange={(e)=>{handleChange("dob",e.target.value)}} onBlur={(e)=>{handleChange("dob",e.target.value)}}/><br/>
                    <div style={{display: (!customer.dob.valid && customer.dob.touched)?"block":"none"}}><p className="text-danger">{customer.dob.error}</p></div>

                    <label className="form-check">Select Your Gender</label>
                    <input type="radio" name="gen" value={"m"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}} />Male  &nbsp;
                    <input type="radio" name="gen" value={"f"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Female  &nbsp;
                    <input type="radio" name="gen" value={"o"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Other <br/><br/>

                    <label className="form-label" for="experience">Enter Experience In Year's</label>
                    <input type="text" className="form-control" id="experience" name="experience" required defaultValue={initCust.experience} onChange={(e)=>{handleChange("experience",e.target.value)}} onBlur={(e)=>{handleChange("experience",e.target.value)}}/><br/>
                    <div style={{display: (!customer.experience.valid && customer.experience.touched)?"block":"none"}}><p className="text-danger">{customer.experience.error}</p></div>

                    <label className="form-label" for="address">Enter Address</label>
                    <textarea type="text" className="form-control" id="address" name="address" defaultValue={initCust.address} onChange={(e)=>{handleChange("address",e.target.value)}} onBlur={(e)=>{handleChange("address",e.target.value)}}/><br/>
                    <div style={{display: (!customer.address.valid && customer.address.touched)?"block":"none"}}><p className="text-danger">{customer.address.error}</p></div>

                    <label className="form-label" for="uname">Enter Username</label>
                    <input type="text" className="form-control" id="uname" name="username" readOnly defaultValue={data.username} onChange={(e)=>{handleChange("username",e.target.value)}} onBlur={(e)=>{handleChange("username",e.target.value) ; }}/><br/>
                    <div style={{display: (!customer.username.valid && customer.username.touched)?"block":"none"}}><p className="text-danger">{customer.username.error}</p></div>
                    
                    <input type="button" value={"Register"} className="btn btn-primary" onClick={(e)=>{submitData(e)}} disabled={!customer.formValid} />
                    {/* disabled={!customer.formValid} */}
                    <input type="reset" value={"Reset"} onClick={()=>{dispatch({type:"reset"})}} className="btn btn-danger "/>
                </form></div> 
        </div>
        </div>   
    )
}