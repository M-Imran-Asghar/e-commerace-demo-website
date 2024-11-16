import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FooterData } from "../data/FooterData";

function Footer() {
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handelWhatsAppClick = () => {
    setShowNumber(true);
    
  };
  const handelEmailClick = () => {
    setShowEmail(true);
    
  };

  return (
    <div className="pt-1">
      <div className="bg-gray-400 rounded-lg shadow-xl shadow-pink-200">
        <div className="flex justify-between">
        <div className="flex p-4 gap-4 items-center">
          <p className="text-sm underline">Develop by:</p>
          <h1 className="text-lg text-pink-800 font-bold">M Imran Asghar</h1>
        </div>
        <div>
          <p className="text-sm mr-5 pt-4 text-pink-800 font-light">Copyright@imranAsghar</p>
        </div>
        </div>

        <div>
          <div className="flex justify-around items-center p-4 ">
            <div className="flex gap-5">
              <div className="text-3xl text-pink-800 hover:text-pink-600">
                <a href={FooterData.github} target="_blank" rel="noreffer">
                  <FaGithub />
                </a>
              </div>
              <div className="text-3xl text-pink-800 hover:text-blue-800">
                <a href={FooterData.linkedin} target="_blank" rel="noreffer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="flex gap-5">
            
            <div className=" relative">
              {showEmail && (
                <div className="bg-pink-800 rounded-lg text-xl text-white p-2 mb-1 absolute" 
                style={{top:-10, right:35}}>
                muhammadimranasghar5@gmail.com
              </div>
              )}
              <button
                className="text-3xl text-pink-800 hover:text-pink-600 "
                onClick={handelEmailClick}
              >
                <MdOutlineEmail />
              </button>
            </div>

            <div className=" relative">
              {showNumber && (
                <div className="text-white rounded-lg text-xl bg-pink-800 p-2 mb-1 absolute" 
                style={{top:-10, left:40}}>
                03086020808
              </div>
              )}
              <button
                className="text-3xl text-pink-800 hover:text-green-800 "
                onClick={handelWhatsAppClick}
              >
                <FaWhatsapp />
              </button>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
