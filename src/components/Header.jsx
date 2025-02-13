import React, { useState } from "react";
import { avatar, logoViatech } from "../assets/imageImport";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineLibraryMusic, MdOutlineSettings } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";

const Header = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleAnimateSpin = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 500);
  };

  return (
    <div className="w-full flex items-center text-xs justify-between px-16 h-full">
      <img src={logoViatech} alt="Logo Viatech" />
      <div className="flex items-center gap-20">
        <div className="flex items-center text-white gap-5">
          <div className="flex gap-5 mr-6">
            <div>
              <h1 className="text-xs text-[#7B7B7B]">Data Status</h1>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 block rounded-full bg-green-500" />
                <h1 className="text-base">Online</h1>
              </div>
            </div>
            <button
              onClick={handleAnimateSpin}
              className="p-2 px-3 rounded-md bg-[#343434]"
            >
              <TfiReload
                className={`text-[#14AFC5] ${spin && "animate-spin"}`}
                size={15}
              />
            </button>
          </div>
          <button className="flex items-center p-[10px_15px] rounded-md gap-2 bg-[#343434]">
            <MdOutlineSettings className="text-[#14AFC5]" size={20} />
            Settings
          </button>
          <button className="flex items-center p-[10px_15px] rounded-md gap-2 bg-[#343434]">
            <MdOutlineLibraryMusic className="text-[#14AFC5]" size={20} />
            Preset Library
          </button>
        </div>
        <div
          onClick={() => setProfileMenu((val) => !val)}
          className="flex items-center relative text-white gap-2.5 w-[250px] justify-between"
        >
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              className="w-14 h-14 object-cover object-top rounded-md"
              alt="User Avatar"
            />
            <span>
              <h1 className="text-base">Username</h1>
              <h1>admin</h1>
            </span>
          </div>
          <AiOutlineDown />
          {/* Dropdown Menu */}
          <div
            className={`w-full h-10 bg-red-500 absolute -bottom-12 transition-all duration-300 ${
              profileMenu ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;