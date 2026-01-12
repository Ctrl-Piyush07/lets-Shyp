import React from 'react';
// Sleek icons matching your design
import { LuWallet, LuLayoutGrid, LuUser, LuPackage,LuMapPin } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-pill">
        {/* Logo Section matching image_410862.png */}
        <div className="nav-logo">
          <div className="logo-box">
             <LuPackage size={22} color="white" />
          </div>
      <h1>
  <span style={{ color: "#F57C00" }}>Let's</span>{" "}
  <span style={{ color: "#2D4A8A" }}>Shyp</span>
</h1>
        </div>

        {/* Action Menu */}
        <div className="nav-links">
          <div className="nav-link">
            <LuUser size={18} />
            <span>Work with Us</span>
          </div>
          
          <div className="nav-link wallet-box">
            <LuWallet size={18} />
            <span>₹0</span>
          </div>

          <button className="nav-btn-primary">
            <LuMapPin size={18} strokeWidth={3} />
            Track Order
          </button>

          <div className="nav-link">
            <LuLayoutGrid size={18} />
            <span>Services</span>
          </div>

          <div className="nav-link">
            <LuUser size={18} />
            <span>Login</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;