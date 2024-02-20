export const TrainerProfile = ()=>{

    const data= JSON.parse(localStorage.getItem("loggedUser"));

    return (
        <div className="innercomps">
            
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td colSpan={2} style={{fontSize:30}}>{data.username}</td>
                </tr>
                
                <tr style={{height:40}}> </tr>
                 <span style={{color:"green", fontSize:20}}></span>

                <tr>
                    <td>NAME</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td></td>
                </tr>
                <tr>
                    <td>CONTACT NO</td>
                    <td></td>
                </tr>
                <tr>
                    <td>DATE OF BIRTH</td>
                    <td></td>
                </tr>
                <tr>
                    <td>SPECIALIZATION</td>
                    <td></td>
                </tr>
                <tr>
                    <td>EXPERIENCE</td>
                    <td>YRS</td>
                </tr>
                <tr>
                    <td>GENDER</td>
                    <td></td>
                </tr>
                <tr>
                    <td>ADDRESS</td>
                    <td></td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}