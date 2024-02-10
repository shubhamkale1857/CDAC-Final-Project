import logo from "./logo.svg";
import "./App.css";
import { About, Blog, Contact } from "./components/FunctionalDemoComps";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RegComp from "./components/RegComponent";
import { useSelector } from "react-redux";
import { LoginComp } from "./components/Logincomp";
import { HomeComp } from "./components/HomeComp";
import { ProfileComp } from "./components/ProfileComp";
import { UserHome } from "./components/UserHomeComp";
import { LogoutComp } from "./components/LogoutComp";
import { UpdatePassComp } from "./components/UpdatePassComp";
import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import Comment from "./pages/Comment";
// import About from "./pages/About";

function App() {
  const myState = useSelector((state) => state.logged);
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Sidebar>
      <div style={{ display: myState.loggedIn ? "none" : "block" }}>
        <ul className="nav navbar" style={{ backgroundColor: "black" }}>
          <li className="nav-item">
            <Link to="/register" className="nav-link" id="link">
              register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" id="link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" id="link">
              login
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/register" element={<RegComp />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/logout" element={<LogoutComp />} />
        <Route path="/profile" element={<ProfileComp />} />
        <Route path="/updatepass" element={<UpdatePassComp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<h1>please check url</h1>} />
      </Routes>
    </div>
  );
}

export default App;
