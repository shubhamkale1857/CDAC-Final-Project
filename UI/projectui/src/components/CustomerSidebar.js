import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import { useSelector } from "react-redux";

export const CustomerSidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const handlestrore = (pth)=>{
    if(pth==="/Customer/Profile")
    {
      localStorage.removeItem("updates");
    }
  }
  const menuItem = [
    {
      path: "/Customer/CustomerHome",
      name: "Dashboard"
    },
    {
      path: "/Customer/fooditems",
      name: "Foods"
    },
    {
      path: "/Customer/insertFood",
      name: "Add Food"
    },
    {
      path: "/Customer/Mealhistory",
      name: "Meal History"
    },
    {
      path: "/Customer/Selecttrainer",
      name: "Select trainer"
    },
    {
      path: "/Customer/ViewConsultation",
      name: "Consultation"
    },
    {
      path: "/Customer/Profile",
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

