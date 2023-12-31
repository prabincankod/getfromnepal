import React from "react";

const Navbar = () => {
  return (
    <nav className="menu ml-auto navbar navbar-expand-lg bg-gray-800 h-25 py-3 shadow-sm sticky top-0">
      <div className="container">
        <div className="flex items-center">
          <img
            className="logo w-20"
            alt="menu"
            src="https://www.simicart.com/blog/wp-content/uploads/eCommerce-logo-1.jpg"
          />
          <ul className=" flex flex-auto justify-end px-3  text-white">
            <li className="mx-3">
              <a href="#">Home</a>
            </li>
            <li className="mx-3">
              <a href="#">Products</a>
            </li>
            <li className="mx-3">
              <a href="#">Contact</a>
            </li>
            <li className="mx-3">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
