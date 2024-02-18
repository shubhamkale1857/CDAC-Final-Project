import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../isLoggedSlice";
import { useState } from "react";

export const LoginComp = () =>{

    const successmessage= (localStorage.getItem("success"));
    const dispatch = useDispatch();
    const myState = useSelector((state)=> state.logged);
    const navigate = useNavigate();

    const handleClick=()=>{
        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                username:uname,
                password:pwd
            })
        }
        // fetch("http://localhost:8080/login",reqOption)
        // .then((res)=>{return res.text()})
        // .then((msg)=>{
        //     if(msg==="success")
        //     {
        //         dispatch(login());
        //            //localStorage.setItem("data",JSON.stringify(data));
        //            //console.log("this is data "+JSON.stringify(data));
        //            navigate('/userhome');
        //     }
        //     else{
        //             setMsg("Wrong credentials!");
        //     }
        // })

        fetch("http://localhost:8080/login",reqOption)
        .then(resp =>  {if(resp.ok)
                         {
                                console.log(resp.status)
                                //console.log(JSON.stringify(resp))
                                return resp.json();
                          }    
                          else
                          {
                                console.log(resp.status)
                                //throw new Error("Server error"); 
                                setMsg("Wrong Credentials")
                                return null;
                          }
                        })  
        .then(data => {
                if( data !== null)
                {
                    dispatch(login())
                    localStorage.setItem("loggedUser",JSON.stringify(data));
                    const role = data.roles[0];
                    if(role === "ADMIN")
                        navigate("/Admin/AdminHome");
                    else if(role === "CUSTOMER")
                        navigate("/Customer/CustomerHome", { replace: true });
                    else if(role === "TRAINER")
                        navigate("/Trainer/TrainerHome");
                }                    
            })              
            .catch(() => navigate("/ErrorPage")
        )  
        
    }

    const[usenamemsg,setUserMsg] = useState("");
    const checkUsername = (val) =>{
        fetch("http://localhost:8500/getusername?uname="+val) 
        .then((res)=>{return res.json()})
        .then((data) => {
            if(data.length == 0){
                setUserMsg("Username Not Present!!!")
                setFlag(true);
            }else{
                setFlag(false);
                setUserMsg("");
            }
        })
        .catch(() => navigate("/ErrorPage"))
    }
    const[msg, setMsg]=useState("");
    const[uname,setUname]=useState("");
    const[pwd,setPwd]=useState("");
    const[flag,setFlag]=useState(true);

    
    return(
        <div>
            <div className="container-fluid custom-bg" style={{ height: "40vh"}}>
            <h1 style={{fontFamily:"Antic Didone", marginTop:100}}className='titlehome'>LOGIN</h1>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
            <span style={{color:"green"}}>{successmessage}</span>
                <form >
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="name">UserName</label>
                        <input type="text" id="name" className="form-control" onChange={(e)=>{setUname(e.target.value);checkUsername(e.target.value)}} onBlur={(e)=>{checkUsername(e.target.value)}}/>
                        </div>
                        <div style={{display: (true)?"block":"none"}}><p className="text-danger">{usenamemsg}</p></div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12 form-group">
                        <label for="pwd">Password</label>
                        <input type="password" id="pwd" className="form-control" onChange={(e)=>{setPwd(e.target.value)}}/>
                        <div className="text-danger">{msg}</div>
                        </div>
                    </div>
                    <p style={{float:"right"}}>don't have an account? <Link to='/register'>register</Link></p>
                    <div className="row">
                        <div className="col-md-5 form-group">
                        <input type="button" value="Login" className="btn btn-primary" onClick={handleClick} disabled={flag} />
                        </div>
                    </div>
                </form>
          </div>
        </div>
        </div>
    )
}