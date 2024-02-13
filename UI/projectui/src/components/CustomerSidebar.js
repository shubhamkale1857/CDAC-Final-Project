import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import { useSelector } from "react-redux";

export const CustomerSidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
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
      path: "/Customer/Mealhistory",
      name: "Meal history"
    },
    {
      path: "/Customer/Selecttrainer",
      name: "Select trainer"
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

