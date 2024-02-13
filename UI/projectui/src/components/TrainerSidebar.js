import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import { useSelector } from "react-redux";

export const TrainerSidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/TrainerHome",
      name: "Dashboard"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/analytics",
      name: "Analytics"
    },
    {
      path: "/comment",
      name: "Comment"
    },
    {
      path: "/product",
      name: "Product"
    },
  ];
  const myState = useSelector((state) => state.logged);
  return (
    <div className="container" style={{ display: myState.loggedIn ? "none" : "block" }}>
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
      <main>{children}</main>
    </div>
  );
};

