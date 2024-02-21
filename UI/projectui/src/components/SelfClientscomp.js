import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SelfClients = ()=>{
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[customers,setCustomers] = useState([]);
    const[script, setScript]=useState([]);
    const navigate = useNavigate();
    const msg = localStorage.getItem("successmsg");
    useEffect(()=>{
        //console.log("*************************************************88")
        fetch("https://localhost:7283/api/Trainer/getAllClients?uid="+data.id)
        .then(resp => resp.json())
        .then(data => {setCustomers(data)})
        .catch(() => navigate("/ErrorPage"))
    },[])
    const gender=(gender)=>{
        
        if(gender==='m')
        {
            return "Male";
        }
        else if(gender==='f')
        {
            return "Female";
        }
        else
        {
            return "Other";
        }
    }
    useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.removeItem("successmsg");
        };
        return () => {
          handleBeforeUnload()
        };
      }, []);

      const formRef = useRef(null);
    

    const sendConsult=(a,b,c)=>{

        const reqOption = {
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                trainer_id : b,
                customer_id : a,
                script : script
            })
        }
        console.log(reqOption)

        fetch("http://localhost:8080/saveCounsultion",reqOption)
        .then(resp=>resp.text())
        .then(data=>{
            if(data==="Success"){
                localStorage.setItem("successmsg","msg sent successfully!!");
                formRef.current.reset();
                navigate("/Trainer/ClientList")
            }
        })
        .catch(() => navigate("/ErrorPage"))
    }
    return (
        <div className="innercomps">
            <span style={{color:"green"}}>{msg}</span>
        <h3>Client List ...</h3>
        <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>CONTACT</td>
                            <td>HEIGHT</td>
                            <td>WEIGHT</td>
                            <td>GENDER</td>
                            <td>GOAL</td> 
                        </tr>
                    </thead>
        {
            customers.map((t)=>{
                return(
                                        
                    <tbody>
                        <tr>
                            <td>{t.fname}&nbsp;{t.lname}</td>
                            <td>{t.email}</td>
                            <td>{t.contactno}</td>
                            <td>{t.height}</td>
                            <td>{t.weight}</td>
                            <td>{gender(t.gender)}</td>
                            <td>{t.goal}</td>
                        </tr>
                        <tr>
                            <td colSpan={7}>

                            <h4>Give Consultation</h4>
                            <form  ref={formRef}>
                                <div className="form-group">
                                <textarea
                                    id="feedbackTextarea"
                                    className="form-control"
                                    rows="4"
                                    onChange={(e)=>{setScript(e.target.value)}}
                                    
                                ></textarea>
                                </div>
                                <br/>
                                <input type="button" value={"Give Consultations"} className="btn btn-primary col-sm-4" onClick={(e)=>{sendConsult(t.customerId, t.trainer)}}/>
                                
                            </form>
                            </td>

                        </tr>
                    </tbody>
                )
            }) 
        }</table>

        
        
    </div>
    )
}