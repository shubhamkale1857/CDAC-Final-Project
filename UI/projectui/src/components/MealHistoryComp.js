import { useEffect, useState } from "react";

export const MealHistory = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));
    const user = JSON.parse(localStorage.getItem("user"));
    const[obj, setObj]= useState([]);
    const[date,setDate]=useState("Today");
    const[date2,setDate2]=useState("");

    useEffect(()=>{
        fetch("http://localhost:8080/getMealHistorytoday?custid="+user.customer_id)
        .then(resp => resp.json())
        .then(data => {setObj(data)})
    },[])

    const loadData = ()=>{
        fetch("http://localhost:8080/getMealHistory?custid="+user.customer_id+"&date="+date2)
        .then(resp => resp.json())
        .then(data => {setObj(data)})

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

            <br/>
            <h3>Enter Date</h3>
            <form class="d-flex">
                <input class="form-control me-2" type="date" onChange={(e)=>{setDate2(e.target.value)}}/>
                <input class="btn btn-primary" type="button" value={"search"} onClick={loadData}/>
            </form>

            <br/><br/><br/>
            

            <h3  style={{color:"rgb(35, 110, 202)"}}>{date}'s Overview</h3><br/>
            
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
    )
}