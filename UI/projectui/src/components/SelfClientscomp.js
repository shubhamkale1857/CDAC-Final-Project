import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SelfClients = ()=>{
    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const[customers,setCustomers] = useState([]);
    const[script, setScript]=useState([]);
    const navigate = useNavigate();
    const[flag,setFlag] = useState([]);
    const[obj,setObj] = useState([]);
    const[date,setDate]=useState("today");
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



      const getclientInfo = (id) => {
        fetch("http://localhost:8080/getMealHistorytoday?custid="+id)
        .then(resp => resp.json())
        .then(data => { setObj( data)})
        setFlag((prevFlag) => {
            const newFlag = [...prevFlag];
            newFlag[id] = true; // Assuming 'true' represents 'approved'
            return newFlag;
          });
      }
    
      const loadData=(id)=>{
        fetch("http://localhost:8080/getMealHistory?custid="+id+"&date="+date)
        .then(resp => resp.json())
        .then(data => { setObj( data)})
      }




    const sendConsult=(a,b)=>{

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
        {
            customers.map((t)=>{
                return(
                    <table className="table table-striped table-bordered">
                    <thead className="table-info">
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
                            <td colSpan={7}><button className="btn btn-secondary" onClick={()=>{getclientInfo(t.customerId)}}>see history..</button>
                            
                            <div style={{display: flag[t.customerId]?"block":"none"}}>
                                <br/>
                                <h5>Enter Date</h5>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="date" onChange={(e)=>{setDate(e.target.value)}}/>
                                    <input class="btn btn-primary" type="button" value={"search"} onClick={()=>{loadData(t.customerId)}}/>
                                </form>
                                <br/>
                                <h6  style={{color:"rgb(35, 110, 202)"}}>{date}'s Overview</h6><br/>
                                <h5 style={{color:"blue"}}>Breakfast</h5>
                                <table className="table table-sm">
                                    <thead>
                                            <tr>
                                                <th>FOOD NAME</th>
                                                <th>QUANTITY</th>
                                                <th>CALORIES</th>
                                                <th>PROTEIN</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            obj.map((s)=>{
                                                if(s[4]===1){
                                                return <tr>
                                                <td>{s[0]}</td>
                                                <td>{s[1]}</td>
                                                <td>{s[2]}</td>
                                                <td>{s[3]}</td>
                                                </tr>}else{return null}
                                            })
                                        }

                                    </tbody>
                                </table>
                                <h5 style={{color:"blue"}}>Lunch</h5>
                                <table className="table table-sm">
                                    <thead>
                                            <tr>
                                                <th>FOOD NAME</th>
                                                <th>QUANTITY</th>
                                                <th>CALORIES</th>
                                                <th>PROTEIN</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            obj.map((s)=>{
                                                if(s[4]===2){
                                                return <tr>
                                                <td>{s[0]}</td>
                                                <td>{s[1]}</td>
                                                <td>{s[2]}</td>
                                                <td>{s[3]}</td>
                                                </tr>}else{return null}
                                            })
                                        }
                                    </tbody>
                                </table>
                                <h5 style={{color:"blue"}}>Snack</h5>
                                <table className="table table-sm">
                                    <thead>
                                            <tr>
                                                <th>FOOD NAME</th>
                                                <th>QUANTITY</th>
                                                <th>CALORIES</th>
                                                <th>PROTEIN</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            obj.map((s)=>{
                                                if(s[4]===3){
                                                return <tr>
                                                <td>{s[0]}</td>
                                                <td>{s[1]}</td>
                                                <td>{s[2]}</td>
                                                <td>{s[3]}</td>
                                                </tr>}else{return null}
                                            })
                                        }
                                    </tbody>
                                </table>
                                <h5 style={{color:"blue"}}>Dinner</h5>
                                <table className="table table-sm">
                                    <thead>
                                            <tr>
                                                <th>FOOD NAME</th>
                                                <th>QUANTITY</th>
                                                <th>CALORIES</th>
                                                <th>PROTEIN</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            obj.map((s)=>{
                                                if(s[4]===4){
                                                return <tr>
                                                <td>{s[0]}</td>
                                                <td>{s[1]}</td>
                                                <td>{s[2]}</td>
                                                <td>{s[3]}</td>
                                                </tr>}else{return null}
                                            })
                                        }
                                    </tbody>
                                </table>




                                <button className="btn btn-secondary" onClick={()=>{
                                    setFlag((prevFlag) => {
                                        const newFlag = [...prevFlag];
                                        newFlag[t.customerId] = false; // Assuming 'true' represents 'approved'
                                        return newFlag;
                                      });
                                }}>hide</button>
                            </div>
                            </td>
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
                                <input type="button" value={"Give Consultations"} className="btn btn-primary col-sm-2" onClick={(e)=>{sendConsult(t.customerId, t.trainer)}}/>
                                
                            </form>
                            </td>

                        </tr>
                        
                    </tbody>
                    </table>
                )
            }) 
        }

        
        
    </div>
    )
}