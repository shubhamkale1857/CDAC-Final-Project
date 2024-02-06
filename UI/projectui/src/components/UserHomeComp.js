import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import pic2 from "../pic3.jpg"
import pic5 from "../pic5.jpg"

export const UserHome=()=>{
    const myState = useSelector(state => state.logged)
    return(
        <div>
            <ul className='nav navbar' style={{backgroundColor:"black"}}>
                <li className='nav-item'>
                    <Link to='/profile' className='nav-link' id='link'>profile</Link>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li className="nav-item">
                <Link to='/blog' className='nav-link' id='link' style={{fontSize:"small"}}>blog</Link> 
                </li>
                <li className="nav-item">
                <Link to='/about' className='nav-link' id='link' style={{fontSize:"small"}}>about</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className='nav-link' id='link' style={{fontSize:"small"}}>contact us</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' id='link'>logout</Link>
                </li>
            </ul>

            <div className="container-fluid">

                
                
                <div className="ArtworkForSale" style={{ left: 535, top: 1057, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>ARTWORK FOR SALE</div>
                
            </div>
        
            
        </div>
        

        
    )
}
