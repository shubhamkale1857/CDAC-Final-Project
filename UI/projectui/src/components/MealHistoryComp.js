import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MealHistory = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const user = JSON.parse(localStorage.getItem("user"));
    const[obj, setObj]= useState([]);
    const[date,setDate]=useState("Today");
    const[date2,setDate2]=useState("");
    const[brflag, setBrflag]= useState(false);
    const[luflag, setLuflag]= useState(false);
    const[snflag, setSnflag]= useState(false);
    const[diflag, setDiflag]= useState(false);
    const[flag, setFlag]= useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/getMealHistorytoday?custid="+user.customer_id)
        .then(resp => resp.json())
        .then(data => { 
            if(data.length!==0){
                setFlag(true)
            console.log(data)
            var arr = data.filter((o)=>{
                return o[4]===1
            })
            if(arr.length!==0)
            {
                setBrflag(true);
            }else{setBrflag(false)}
            arr = data.filter((o)=>{
                return o[4]===2
            })
            if(arr.length!==0)
            {
                setLuflag(true);
            }else{setLuflag(false);}
            arr = data.filter((o)=>{
                return o[4]===3
            })
            if(arr.length!==0)
            {
                setSnflag(true);
            }else{setSnflag(false);}
            arr = data.filter((o)=>{
                return o[4]===4
            })
            if(arr.length!==0)
            {
                setDiflag(true);
            }else{setDiflag(false);}
            setObj(data)}
            else{
                setFlag(false)
            }
            
        })
        .catch(() => navigate("/ErrorPage"))
    },[])

    const loadData = ()=>{
        fetch("http://localhost:8080/getMealHistory?custid="+user.customer_id+"&date="+date2)
        .then(resp => resp.json())
        .then(data => {
            if(data.length!==0){
                setFlag(true)
            var arr = data.filter((o)=>{
                return o[4]===1
            })
            if(arr.length!==0)
            {
                setBrflag(true);
            }else{setBrflag(false)}
            arr = data.filter((o)=>{
                return o[4]===2
            })
            if(arr.length!==0)
            {
                setLuflag(true);
            }else{setLuflag(false);}
            arr = data.filter((o)=>{
                return o[4]===3
            })
            if(arr.length!==0)
            {
                setSnflag(true);
            }else{setSnflag(false);}
            arr = data.filter((o)=>{
                return o[4]===4
            })
            if(arr.length!==0)
            {
                setDiflag(true);
            }else{setDiflag(false);}
            setObj(data)}
            else{
                setFlag(false)
            }
            
        })

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        if(date2===formattedDate)
            setDate("Today");
        else
            setDate(date2);
    }

    return (
        <div className="innercomps">
            {/* {JSON.stringify(obj)} */}
            <br/>
            <h3>Enter Date</h3>
            <form class="d-flex">
                <input class="form-control me-2" type="date" onChange={(e)=>{setDate2(e.target.value)}}/>
                <input class="btn btn-primary" type="button" value={"search"} onClick={loadData}/>
            </form>

            <br/><br/><br/>
            <div style={{display: flag?"block":"none"}}>
            <h3  style={{color:"rgb(35, 110, 202)"}}>{date}'s Overview</h3><br/>

            <div style={{display: brflag?"block":"none"}} >
            <h5>Breakfast</h5>
            <table className="table table-bordered">
                <thead className="table-info">
                        <tr>
                            <td>FOOD NAME</td>
                            <td>QUANTITY</td>
                            <td>CALORIES</td>
                            <td>PROTEIN</td>
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
            </div>

            <div  style={{display: luflag?"block":"none"}}>
            <h5>Lunch</h5>
            <table className="table table-bordered">
                <thead className="table-info">
                        <tr>
                            <td>FOOD NAME</td>
                            <td>QUANTITY</td>
                            <td>CALORIES</td>
                            <td>PROTEIN</td>
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
            </div>

            <div style={{display: snflag?"block":"none"}}>
            <h5>Snack</h5>
            <table className="table table-bordered">
                <thead className="table-info">
                        <tr>
                            <td>FOOD NAME</td>
                            <td>QUANTITY</td>
                            <td>CALORIES</td>
                            <td>PROTEIN</td>
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
            </div>

            <div style={{display: diflag?"block":"none"}}>
            <h5>Dinner</h5>
            <table className="table table-bordered">
                <thead className="table-info">
                        <tr>
                            <td>FOOD NAME</td>
                            <td>QUANTITY</td>
                            <td>CALORIES</td>
                            <td>PROTEIN</td>
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
            </div>
        </div>
        <h3 style={{display: flag?"none":"block" , color:"rgb(35, 110, 202)"}}>No History for this day!!</h3>
        </div>
    )
}