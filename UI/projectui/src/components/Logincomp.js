import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../isLoggedSlice";
import { useState } from "react";

export const LoginComp = () =>{
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
                                setMsg("Login failed")
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
                        navigate("/admin_home");
                    else if(role === "CUSTOMER")
                        navigate("/CustomerHome");
                    else if(role === "TRAINER")
                        navigate("/patient_home");
                }                    
            })              
            .catch(error => alert(error)
        )  
        
    }

    const[msg, setMsg]=useState("");
    const[uname,setUname]=useState("");
    const[pwd,setPwd]=useState("");
    const[flag,setFlag]=useState(true);

    
    return(
        <div>
            <div className="container-fluid custom-bg" style={{ height: "40vh"}}>
            <h1 style={{fontFamily:"Antic Didone"}}>LOGIN</h1>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-4 mt-5">
                <form >
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="name">UserName</label>
                        <input type="text" id="name" className="form-control" onChange={(e)=>{setUname(e.target.value)}}/>
                        </div>
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
                        <input type="button" value="Login" className="btn btn-primary" onClick={handleClick} />
                        </div>
                    </div>
                </form>
          </div>
        </div>
        </div>
    )
}