import React from "react";
import eye from "../assets/eye.svg";
import paint from "../assets/paint.svg";
import MidGrid1 from "../assets/Midgrid1.webp";
import MidGrid2 from "../assets/MidGrid2.webp";
import match from "../assets/match-group.png"

const MidGrid = () => {
  return (
    <div>
      <div className="flex gap-3">
        <div>
          <div className="w-[450px] h-[600px] bg-black/5 rounded-lg pt-[50px] pl-[35px] border-[1px]">
            <img
              src={eye}
              alt="welcome"
              height={20}
              width={20}
              className="object-contain overflow-hidden rounded-lg"
            />
            <h3 className="font-bold text-lg pt-4 text-left">
              Customize the info you track
            </h3>
            <p>
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </p>

            <img
              src={MidGrid1}
              alt="welcome"
              height={600}
              width={400}
              className="object-contain mt-[140px] ml-[12px] overflow-hidden rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className="w-[450px] h-[600px] bg-black/5 rounded-lg pt-[50px] pl-[35px] border-[1px]">
            <img
              src={paint}
              alt="welcome"
              height={20}
              width={20}
              className="object-contain overflow-hidden rounded-lg"
            />
            <h3 className="font-bold text-lg pt-4 text-left">
              Build any page, communicate any idea
            </h3>
            <p>
              Everything is drag and drop in Notion — images, toggles, to-do’s,
              even embedded databases.
            </p>

            <img
              src={MidGrid2}
              alt="welcome"
              height={600}
              width={400}
              className="object-contain mt-[140px] ml-[12px] overflow-hidden rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
      <div className="flex items-center justify-center mt-[30px] font-[Lyon-Text] pt-5  ">
        <h2 className="text-3xl flex font-medium  ">
          "Notion adapts to your needs. It’s as minimal or as<br></br> powerful as you need it to be."
        </h2>
      </div>
      <div className="flex  justify-center  gap-3">
        <img
          src={match}
          alt="metalab"
          height={25}
          width={25}
          className="object-contain"
        />
        <h5 className="font-[Segoe UI] text-xs leading-none">
            <span className="font-semibold mr-[100px]">Rahim Makani</span><br>
            </br>Director of Product, Matchgroup</h5>
      </div>
      </div>
    </div>
  );
};

export default MidGrid;
