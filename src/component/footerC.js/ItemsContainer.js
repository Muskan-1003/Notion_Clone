import Item from "./Item";
import {Resources,GetStarted,Learn,Build,DOWNLOAD,Solutions,PRODUCTS } from "./FooterMenu";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/social/twitter.png"
import insta from "../../assets/social/instagram.png"
import yt from "../../assets/social/youtube.png"
import linkedin from "../../assets/social/linkedin.png"
import fb from "../../assets/social/facebook.png"



const ItemsContainer = () => {
  return (
    <div className="flex flex-row gap-[130px] items-center justify-center mt-3 ">
        
    <div className="  ml-[150px]  ">
        <ul className="flex ">
              <li>
                <img src={logo} height={20} width={60} alt="Logo" />
              </li>
              <li className="font-[Segoe UI] text-black mt-4 text-xl font-medium">
                Notion
              </li>

            </ul>
            <div className="flex gap-3">
            <img src={insta} height={10} width={15} alt="Logo" />
            <img src={twitter} height={10} width={15} alt="Logo" />
            <img src={linkedin} height={10} width={15} alt="Logo" />
            <img src={fb} height={10} width={15} alt="Logo" />
            <img src={yt} height={10} width={15} alt="Logo" />
            
            
            </div>
      </div>
        


        <div className="flex flex-col text-left gap-3">

      <Item Links={PRODUCTS} title="Products" />
      <Item Links={Solutions} title="Solution" />
        </div>
        <div className="flex flex-col text-left gap-3">

      <Item Links={DOWNLOAD} title="download" />
      <Item Links={Build} title="Build" />
      <Item Links={Learn} title="Learn" />
        </div>
        <div className="flex flex-col text-left gap-3">

      <Item Links={GetStarted} title="Start" />
      <Item Links={Resources} title="Resources" />
        </div>
    </div>
  );
};

export default ItemsContainer;

// grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16