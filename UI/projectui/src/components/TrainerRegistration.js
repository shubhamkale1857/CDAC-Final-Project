
import { useReducer,useState } from "react"
import { Link, useNavigate } from "react-router-dom";
//import pic from "https://cdn.pixabay.com/photo/2023/11/10/01/47/homeless-8378586_640.png"



function TrainerRegistration(){
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
                if(val < 0 || val > 41){
                    valid = false;
                    error = "Enter Valid Experience in Number between 0 to 41 years";
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
        fetch("http://localhost:8500/getemailidregT?email="+val) 
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
    }
    const[usenamemsg,setUserMsg] = useState("");
    const checkUsername = (val) =>{
        fetch("http://localhost:8500/getusername?uname="+val) 
        .then((res)=>{return res.json()})
        .then((data) => {
            if(data.length > 0){
                setUserMsg("Username Already Taken!!!")
                customer.email.valid=false;
            }else{
                setUserMsg("");
                customer.email.valid=true;
            }
        })
    }
    const submitData = (e)=>{
        e.preventDefault();
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                fname : customer.fname.value,
                lname : customer.lname.value,
                email : customer.email.value,
                contact:customer.contact.value,
                dob : customer.dob.value,
                gender:gender,
                specialization: customer.specialization.value,
                experience: customer.experience.value,
                address: customer.address.value,
                username : customer.username.value,
                pass : customer.password.value
            })
        }
        console.log(reqOption);
        fetch("http://localhost:8080/saveTrainer",reqOption)
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
        .catch(error => navigate("/trainerReg"))

        navigate("/login");   
    }
    const[gender,setGender] = useState("");
    return(
        // style={{background:url('https://cdn.pixabay.com/photo/2023/11/10/01/47/homeless-8378586_640.png') center center no-repeat}}
        
        <div className="innercomps">
            <div className="container-fluid">
            <h1 style={{fontFamily:"Antic Didone"}}>TRAINER REGISTER</h1>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-6 mt-5"> 
            <form>
                    <label className="form-label" for="fname">Enter First Name</label>
                    <input type="text" className="form-control" id="fname" name="fname" value={customer.fname.val} onChange={(e)=>{handleChange("fname",e.target.value)}} onBlur={(e)=>{handleChange("fname",e.target.value)}}/><br/>
                    <div style={{display: (!customer.fname.valid && customer.fname.touched)?"block":"none"}}><p className="text-danger">{customer.fname.error}</p></div>

                    <label className="form-label" for="lname">Enter Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lname" value={customer.fname.val} onChange={(e)=>{handleChange("lname",e.target.value)}} onBlur={(e)=>{handleChange("lname",e.target.value)}}/><br/>
                    <div style={{display: (!customer.lname.valid && customer.lname.touched)?"block":"none"}}><p className="text-danger">{customer.lname.error}</p></div>


                    <label className="form-label" for="email">Enter Your Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={(e)=>{handleChange("email",e.target.value)}} onBlur={(e)=>{handleChange("email",e.target.value); checkEmail(e.target.value)}}/><br/>
                    <div style={{display: (!customer.email.valid && customer.email.touched)?"block":"none"}}><p className="text-danger">{customer.email.error}</p></div>
                    <div style={{display: (true)?"block":"none"}}><p className="text-danger">{msg}</p></div>

                    <label className="form-label" for="contact">Enter Contact Number</label>
                    <input type="text" className="form-control" id="contact" name="contact" value={customer.contact.val} onChange={(e)=>{handleChange("contact",e.target.value)}} onBlur={(e)=>{handleChange("contact",e.target.value)}}/><br/>
                    <div style={{display: (!customer.contact.valid && customer.contact.touched)?"block":"none"}}><p className="text-danger">{customer.contact.error}</p></div>

                    <label className="form-label" for="add">Enter Date of Birth</label>
                    <input type="date" className="form-control" id="dob" name="dob" value={customer.dob.val} onChange={(e)=>{handleChange("dob",e.target.value)}} onBlur={(e)=>{handleChange("dob",e.target.value)}}/><br/>
                    <div style={{display: (!customer.dob.valid && customer.dob.touched)?"block":"none"}}><p className="text-danger">{customer.dob.error}</p></div>

                    <label className="form-check">Select Your Gender</label>
                    <input type="radio" name="gen" value={"m"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}} />Male  &nbsp;
                    <input type="radio" name="gen" value={"f"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Female  &nbsp;
                    <input type="radio" name="gen" value={"o"} className="form-check-input" onChange={(e)=>{setGender(e.target.value)}}/>Other <br/><br/>


                    <label className="form-label" for="specialization">Enter Specialization</label>
                    <select className="form-check" value={customer.specialization.val} onChange={(e)=>{handleChange("specialization",e.target.value)}} onBlur={(e)=>{handleChange("specialization",e.target.value)}}>
                        <option value={""} className="form-check-input">Select Specialization</option>
                        <option value={"Nutritionist"} className="form-check-input">Nutritionist</option>
                        <option value={"Physique & Body Building"} className="form-check-input">Physique & Body Building</option>
                        <option value={"Yoga Trainer"} className="form-check-input">Yoga Trainer</option>
                        <option value={"Strength & Conditioning"} className="form-check-input">Strength & Conditioning</option>
                        <option value={"Youth Fitness"} className="form-check-input">Youth Fitness</option>
                        <option value={"Senior Fitness"} className="form-check-input">Senior Fitness</option>
                    </select><br/>
                    <div style={{display: (!customer.specialization.valid && customer.specialization.touched)?"block":"none"}}><p className="text-danger">{customer.specialization.error}</p></div>

                    <label className="form-label" for="experience">Enter Experience In Year's</label>
                    <input type="text" className="form-control" id="experience" name="experience" value={customer.experience.val} onChange={(e)=>{handleChange("experience",e.target.value)}} onBlur={(e)=>{handleChange("experience",e.target.value)}}/><br/>
                    <div style={{display: (!customer.experience.valid && customer.experience.touched)?"block":"none"}}><p className="text-danger">{customer.experience.error}</p></div>

                    <label className="form-label" for="address">Enter Address</label>
                    <textarea type="text" className="form-control" id="address" name="address" value={customer.address.val} onChange={(e)=>{handleChange("address",e.target.value)}} onBlur={(e)=>{handleChange("address",e.target.value)}}/><br/>
                    <div style={{display: (!customer.address.valid && customer.address.touched)?"block":"none"}}><p className="text-danger">{customer.address.error}</p></div>

                    <label className="form-label" for="uname">Enter Username</label>
                    <input type="text" className="form-control" id="uname" name="username" value={customer.username.val} onChange={(e)=>{handleChange("username",e.target.value)}} onBlur={(e)=>{handleChange("username",e.target.value) ; checkUsername(e.target.value)}}/><br/>
                    <div style={{display: (!customer.username.valid && customer.username.touched)?"block":"none"}}><p className="text-danger">{customer.username.error}</p></div>
                    <div style={{display: (true)?"block":"none"}}><p className="text-danger">{usenamemsg}</p></div>

                    <label className="form-label" for="pass">Enter Your Password</label>
                    <input type="password" className="form-control" id="pass" name="pass" onChange={(e)=>{handleChange("password",e.target.value)}} onBlur={(e)=>{handleChange("password",e.target.value)}}/><br/>
                    <div style={{display: (!customer.password.valid && customer.password.touched)?"block":"none"}}><p className="text-danger">{customer.password.error}</p></div>
                    <p className="text-success" style={{display:(customer.password.valid)?"block":"none"}}>{customer.password.error}</p>

                    <label className="form-label" for="rpass">Re-Enter Your Password</label>
                    <input type="password" className="form-control" id="rpass" onChange={(e)=>{handleChange("repassword",e.target.value)}} onBlur={(e)=>{handleChange("repassword",e.target.value)}}/><br/>
                    <div style={{display: (!customer.repassword.valid && customer.repassword.touched)?"block":"none"}}><p className="text-danger">{customer.repassword.error}</p></div>

                    <p style={{float:"right"}}>already have an account? <Link to='/login'>login</Link></p><br/>
                    <input type="button" value={"Register"} className="btn btn-primary" onClick={(e)=>{submitData(e)}} disabled={!customer.formValid} />
                    {/* disabled={!customer.formValid} */}
                    <input type="reset" value={"Reset"} onClick={()=>{dispatch({type:"reset"})}} className="btn btn-danger "/>
                </form></div> 
        </div>
        </div>
        
    )
}

export default TrainerRegistration;