
import { useReducer,useState } from "react"
import { Link, useNavigate } from "react-router-dom";
//import pic from "https://cdn.pixabay.com/photo/2023/11/10/01/47/homeless-8378586_640.png"



function RegComp(){
    let navigate = useNavigate();
    const init = {
        name : {value:"",error:"",touched:false,valid:false}, 
        email : {value:"",error:"",touched:false,valid:false},  
        weight : {value:"",error:"",touched:false,valid:false}, 
        height : {value:"",error:"",touched:false,valid:false},
        username : {value:"",error:"",touched:false,valid:false}, 
        password : {value:"",error:"",touched:false,valid:false},
        repassword : {value:"",error:"",touched:false,valid:false},
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
    const validate1 = (key,val)=>{
        let valid = true;
        let error = "";
        switch(key){
            case 'name':
                var pattern = /^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "Name not valid!!!"
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
            case 'weight':
                pattern = /^\d*\.?\d*$/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "Enter Valid Decimal Value!!!"
                }
                break;
            case 'height':
                pattern = /^\d*\.?\d*$/;
                if(!pattern.test(val)){
                    valid = false;
                    error = "Enter Valid Decimal Value!!!"
                }
                break;
            case 'password':
                let weakPass = /^[a-zA-z]+$/;
                let avgPass = /(?=.[0-9!@#$%^&*]{1})[a-zA-z]+$/
                // let strongPass = /^(?=.[0-9])(?=.[A-Z])(?=.[!@#$%^&])[A-Za-z0-9!@#$%^&]{5,}$/;
                let strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{4,15}$/;
        
                if(!strongPass.test(val)){
                    if(!avgPass.test(val)){
                        if(val === ""){
                            valid = false;
                            error = "Plz Enter PassWord!!!"
                        }else if(!weakPass.test(val)){
                            valid = false;
                            error = "Average PassWord!!!"
                        }else{
                            valid = false;
                            error = "Weak PassWord!!!"
                            
                        }
                    }
                }else{
                    error = "Strong PassWord!!!";
                }
                break;
            case 'repassword':
                if(val !== customer.password.value){
                    valid = false;
                    error = "Both Password Dont Match. Re-Enter Pass!!!";
                }
                break;
            default:
                break;
        }
        return {valid: valid,error: error};
    }
    const handleChange = (key,val)=>{
        setMsg("");
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
    const[msg,setMsg] = useState("");
    const checkEmail = (val) =>{
        fetch("http://localhost:8500/getemailidreg?email="+val) 
        .then((res)=>{return res.json()})
        .then((data) => {
            if(data.length > 0){
                setMsg("User Already Present!!!")
                customer.email.valid=false;
            }else{
                setMsg("");
                customer.email.valid=true;
            }
        })

        console.log("lenght of message: "+msg);
    }
    const submitData = (e)=>{
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                name : customer.name.value,
                email : customer.email.value,
                date : date,
                gender:gender,
                height: customer.height.value,
                weight: customer.weight.value,
                roleid:1,
                username : customer.username.value,
                password : customer.password.value
            })
        }

        fetch("http://localhost:8080/saveCustomer",reqOption)
        .then((res)=>{return res.text()})
        .then((msg)=>{console.log("Data Inserted Successfully!!!")})

        navigate("/login");
    }
    const[date,setDate] = useState("");
    // const[weight,setWeight] = useState(0);
    // const[height,setHeight] = useState(0);
    const[gender,setGender] = useState("");
    return(
        // style={{background:url('https://cdn.pixabay.com/photo/2023/11/10/01/47/homeless-8378586_640.png') center center no-repeat}}
        
        <div>
            <div className="container-fluid custom-bg" style={{ height: "40vh"}}>
            <h1 style={{fontFamily:"Antic Didone", color:"black"}}>USER REGISTER</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-4 mt-5"> 
            <form>
                    <label className="form-label" for="name">Enter Name</label>
                    <input type="text" className="form-control" id="name" value={customer.name.val} onChange={(e)=>{handleChange("name",e.target.value)}} onBlur={(e)=>{handleChange("name",e.target.value)}}/><br/>
                    <div style={{display: (!customer.name.valid && customer.name.touched)?"block":"none"}}><p className="text-danger">{customer.name.error}</p></div>

                    <label className="form-label" for="email">Enter Your Email</label>
                    <input type="email" className="form-control" id="email" onChange={(e)=>{handleChange("email",e.target.value)}} onBlur={(e)=>{handleChange("email",e.target.value); checkEmail(e.target.value)}}/><br/>
                    <div style={{display: (!customer.email.valid && customer.email.touched)?"block":"none"}}><p className="text-danger">{customer.email.error}</p></div>
                    <div style={{display: (true)?"block":"none"}}><p className="text-danger">{msg}</p></div>

                    <label className="form-label" for="add">Enter Date of Birth</label>
                    <input type="date" className="form-control" id="add" onChange={(e)=>{setDate(e.target.value)}}/><br/>

                    <label className="form-check">Select Your Gender</label>
                    <input type="radio" name="gen" value={"m"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}} />Male  &nbsp;
                    <input type="radio" name="gen" value={"f"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Female  &nbsp;
                    <input type="radio" name="gen" value={"o"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Other <br/><br/>

                    <label className="form-label">Weight: </label>
                    <input type="text" name="weight" className="form-field" onChange={(e)=>{handleChange("weight",e.target.value)}} onBlur={(e)=>{handleChange("weight",e.target.value); checkEmail(e.target.value)}}/><br/>
                    <div style={{display: (!customer.weight.valid && customer.weight.touched)?"block":"none"}}><p className="text-danger">{customer.weight.error}</p></div>

                    <label className="form-label">Height:</label>
                    <input type="text" name="height" className="form-field" onChange={(e)=>{handleChange("height",e.target.value)}} onBlur={(e)=>{handleChange("height",e.target.value); checkEmail(e.target.value)}}/><br/>
                    <div style={{display: (!customer.height.valid && customer.height.touched)?"block":"none"}}><p className="text-danger">{customer.height.error}</p></div><br/>

                    <label className="form-label" for="uname">Enter Username</label>
                    <input type="text" className="form-control" id="uname" value={customer.username.val} onChange={(e)=>{handleChange("username",e.target.value)}} onBlur={(e)=>{handleChange("username",e.target.value)}}/><br/>
                    <div style={{display: (!customer.username.valid && customer.username.touched)?"block":"none"}}><p className="text-danger">{customer.username.error}</p></div>

                    <label className="form-label" for="pass">Enter Your Password</label>
                    <input type="password" className="form-control" id="pass" name="pass" onChange={(e)=>{handleChange("password",e.target.value)}} onBlur={(e)=>{handleChange("password",e.target.value)}}/><br/>
                    <div style={{display: (!customer.password.valid && customer.password.touched)?"block":"none"}}><p className="text-danger">{customer.password.error}</p></div>
                    <p className="text-success" style={{display:(customer.password.valid)?"block":"none"}}>{customer.password.error}</p>

                    <label className="form-label" for="rpass">Re-Enter Your Password</label>
                    <input type="password" className="form-control" id="rpass" onChange={(e)=>{handleChange("repassword",e.target.value)}} onBlur={(e)=>{handleChange("repassword",e.target.value)}}/><br/>
                    <div style={{display: (!customer.repassword.valid && customer.repassword.touched)?"block":"none"}}><p className="text-danger">{customer.repassword.error}</p></div>

                    <p style={{float:"right"}}>already have an account? <Link to='/login'>login</Link></p><br/>
                    <input type="button" value={"Register"} className="btn btn-primary" onDoubleClick={(e)=>{submitData(e)}}  />
                    {/* disabled={!customer.formValid} */}
                    <input type="reset" value={"Reset"} className="btn btn-danger "/>
                </form></div> 
        </div>
        </div>
        
    )
}

export default RegComp;