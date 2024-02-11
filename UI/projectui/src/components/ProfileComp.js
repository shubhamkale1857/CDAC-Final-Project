import { Link, useNavigate } from "react-router-dom";

export const ProfileComp = () => {
    const navigate = useNavigate();
    const data1= localStorage.getItem("data");
    const gotoupdate=()=>{
        navigate("/updatepass");
    }
    return (
        <div>
            <h1>Profile Component</h1>
        </div>
    );
};




// import React, { useEffect, useState } from "react";
//  export const ProfileComp = () => {
//     const init = {
//         name : "",
//         email : "",
//         city : ""
//     }
//     const[data,setData] = useState(init);
//     // <button onClick={()=>{

//     // }} value={"get VAlue"}>Get Info</button>
//     function getInfo(e){
//                 e.preventDefault();
//                 let user = localStorage.getItem("uemail");
//                 console.log(user);
//                 fetch("http://localhost:8500/greetCust?email="+user)
//                 .then((res)=>{return res.json()})
//                 .then((data)=>{setData({name:data[0].name,email:data[0].email,city:data[0].address})});
                
//                 // console.log(data.name);
//     }
//     useEffect(()=>{

//     },[])
//     return (
//         // onLoadCapture={(e)=>{getInfo(e)}}
//         <div className="container position-relative" >
//         <input type="button" value={"Get Info"} onClick={(e)=>{getInfo(e)}}/>
//         <h2>Profile</h2>
//             <div className="col-md-8">
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <h6 className="mb-0">Full Name: </h6>
//                     </div>
//                     <div className="col-sm-9 text-secondary">
//                       {data.name}
//                     </div>
//                   </div>
//                   <hr/>
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <h6 className="mb-0">Email: </h6>
//                     </div>
//                     <div className="col-sm-9 text-secondary">
//                       {data.email}
//                     </div>
//                   </div>
//                   <hr/>
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <h6 className="mb-0">City: </h6>
//                     </div>
//                     <div className="col-sm-9 text-secondary">
//                       {data.address}
//                     </div>
//                   </div>
//                   <hr/>
//                   <div className="row">
//                     <div className="col-sm-12">
//                       <a className="btn btn-info " target="__blank">Edit</a>
//                     </div>
//                   </div>
//               </div>
//           </div>
//           </div>
//         </div>
//     );
// };
