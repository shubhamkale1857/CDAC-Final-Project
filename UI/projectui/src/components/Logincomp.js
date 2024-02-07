import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {login} from "../isLoggedSlice";
import { useState } from "react";

export const LoginComp = () =>{
    const dispatch = useDispatch();
    const myState = useSelector((state)=> state.logged);
    const navigate = useNavigate();

    const handleClick=()=>{
        fetch("http://localhost:8500/getusername?uname="+uname)
        .then(resp => resp.json())
        .then(data=>{
            if(data.length!==0)
            {
                if(data[0].pass===pwd)
                {
                dispatch(login());
                localStorage.setItem("data",JSON.stringify(data));
                console.log("this is data "+JSON.stringify(data));
                navigate('/userhome');
                }
                else{
                    setMsg2("Wrong password!");
                }
            }
            else{

            }
            
        })
    }

    const[msg1, setMsg1]=useState("");
    const[msg2, setMsg2]=useState("");
    const[uname,setUname]=useState("");
    const[pwd,setPwd]=useState("");

    const getUserName=()=>{
            fetch("http://localhost:8500/getusername?uname="+uname)
            .then(resp => resp.json())
            .then(data=>{
                if(data.length===0)
                {
                    setMsg1("Username not found!");
                }
                else{
                    setMsg1("");
                }
            })
        
        
        }
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
                        <label for="name">Email</label>
                        <input type="text" id="name" className="form-control" onChange={(e)=>{setUname(e.target.value)}} onBlur={getUserName}/>
                        <div className="text-danger">{msg1}</div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12 form-group">
                        <label for="pwd">Password</label>
                        <input type="password" id="pwd" className="form-control" onChange={(e)=>{setPwd(e.target.value)}}/>
                        <div className="text-danger">{msg2}</div>
                        </div>
                    </div>
                    <p style={{float:"right"}}>don't have an account? <Link to='/register'>register</Link></p>
                    <div className="row">
                        <div className="col-md-5 form-group">
                        <input type="button" value="Login" className="btn btn-primary" onClick={handleClick}/>
                        </div>
                    </div>
                </form>
          </div>
        </div>
        </div>
    )
}