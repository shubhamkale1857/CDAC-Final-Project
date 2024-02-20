import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import { useSelector } from "react-redux";

export const AdminSidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);


  const handlestrore = (pth)=>{
    if(pth==="/Admin/AdminHome")
    {
      localStorage.removeItem("tregister");
      localStorage.removeItem("datainser");
      localStorage.removeItem("dataupdate");
    }
  }

  const menuItem = [
    {
      path: "/Admin/AdminHome",
      name: "Dashboard"
    },
    {
      path: "/Admin/trainerReg",
      name: "Add Trainer"
    },
    {
      path: "/Admin/updateTrainer",
      name: "Update Trainer"
    },
    {
      path: "/Admin/fooditems",
      name: "Foods"
    },
    {
      path: "/Admin/AddFood",
      name: "Add Food"
    },
    {
      path: "/Admin/UpdateFood",
      name: "Update Food"
    },
    {
      path: "/Admin/Profile",
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

