import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router-dom
import "../App.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = ({ children }) => {
  //const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
  ];
  const myState = useSelector((state) => state.logged);
  return (
    <div className="container" style={{ display: myState.loggedIn ? "none" : "block" }}>
      <div style={{ width: "250px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: "block" }} className="logo">
            Logo
          </h1>
          {/* <div style={{ marginLeft: "50px" }} className="bars">
            <FaBars onClick={toggle} />
          </div> */}
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
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

export default Sidebar;
