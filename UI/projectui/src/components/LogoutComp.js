import { useNavigate } from "react-router-dom";
import {logout} from "../isLoggedSlice";
import { useDispatch } from "react-redux";

export const LogoutComp =()=>{
    const dispatched = useDispatch();
    const navigate = useNavigate();
    dispatched(logout());
    localStorage.clear();
  
    navigate('/login');
}