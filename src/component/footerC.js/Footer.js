import React from "react";
import ItemsContainer from "./ItemsContainer";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white mt-[30px] border-t border-gray-500 w-full">
      
      <ItemsContainer />
      <div className="mr-[450px] mt-[25px]">
        <p className="text-xs">Do Not Sell or Share My Info</p>
        <p className="text-xs text-slate-400">© 2023 Notion Labs, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
