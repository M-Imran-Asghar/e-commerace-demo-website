import React from "react";
import { useState } from "react";
import { NavData } from "../data/NavData";
import InputBox from "../inputBox/InputBox";
import ButtonComponenet from "../button/ButtonComponenet";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  
  // const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate("/");
  };

  const GoToLogin = () => {
    navigate("/Login");
  };

  const closeDropdown = () => {
    setTimeout(() => {
      setShowDropDown(false);
    }, 2000);
  };

  

  const cartCount = useSelector((state)=> state.cart.count)
  
  return (
    <div className=" sticky inset-0 z-10 h-10">
      <div className="bg-gray-400 p-5 flex justify-between rounded-b-lg shadow-md shadow-slate-700 ">
        <img
          className="w-12 h-12 rounded-full"
          src={NavData.logo_image}
          alt="Logo"
        />

        <nav className=" flex ">
          <ul className="flex gap-4 items-center text-pink-800 hover:text-pink-600">
            <li>
              
              <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block  duration-200 font-bold ${
                        isActive ? "text-gray-900 underline " : "text-pink-800 hover:text-pink-600"
                      } `
                    }
                    onClick={GoToHome}
                  >
                    Home
                  </NavLink>
            </li>

            <li>
              <NavLink 
              to="/watches"
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-gray-900 underline " : "text-pink-800 hover:text-pink-600"
                } `
              }
                >
                  Watches
                
              </NavLink>
            </li>
          </ul>

          
        </nav>
        <div className="flex gap-6">
        <Link
           to="/login" 
          >
            <button
              className=" flex flex-col items-center text-pink-800 hover:text-pink-600"
              // onClick={GoToLogin}
            >
              <p className="text-2xl">{NavData.loginIcon}</p>
              {NavData.login}
            </button>
            
          </Link>

          <Link className=" flex flex-col items-center text-pink-800 hover:text-pink-600 relative"
           to="/addtoCart"
          >
            <p className="text-2xl">{NavData.cartIcon}</p>
                 {NavData.cart}
            <h3 className="absolute font-bold text-lg text-gray-900" 
                style={{top: -16, right: -12}}
            >
              {cartCount}
            </h3>
            
          </Link>
          <div className="flex">
          <InputBox
            type="text"
            className="bg-pink-100 outline-none p-2 text-lg rounded-l-md"
          />
          <ButtonComponenet
            className="bg-pink-800 hover:bg-pink-600 text-white p-2 text-lg rounded-r-md"
            label="Search"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
