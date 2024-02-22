import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import { useSelector } from "react-redux";

export const TrainerSidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const handlestrore = (pth)=>{
    if(pth==="/Trainer/Profile")
    {
      localStorage.removeItem("tregister");
    }
  }
  const menuItem = [
    {
      path: "/Trainer/TrainerHome",
      name: "Dashboard"
    },
    {
      path: "/Trainer/Requests",
      name: "Client's Requests"
    },
    {
      path: "/Trainer/ClientList",
      name: "Client's List"
    },
    {
      path: "/Trainer/Profile",
      name: "Profile"
    }
  ];
  const myState = useSelector((state) => state.logged);
  return (
    <div className="container" style={{ display: myState.loggedIn ? "block" : "none" }}>
      <div  className="sidebar" style={{marginTop: 55}}>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
            onClick={()=>{handlestrore(item.path)}}
          >
            
            <div style={{ display: "block" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <Outlet/>
    </div>
  );
};

