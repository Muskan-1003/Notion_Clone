import React from "react";
import pencil from "../assets/giant-pencil-illustration.webp";
import logoline from "../assets/logo-in-line.webp";
import metalab from "../assets/logo/metalab.png";
import line from "../assets/line.png";


const MidImg = () => {
    console.log(metalab);
  return (
    <div className="">
      <div className="flex justify-center ml-80 ">
        <h1 className="text-5xl font-bold pt-20">
          Consolidate tools.<br></br>
          Cut costs.
        </h1>

        <img
          src={pencil}
          alt="pencil"
          height={250}
          width={250}
          className="object-contain "
        />
      </div>

      <img
        src={logoline}
        alt="logo"
        height={550}
        width={550}
        className="object-contain  relative left-[280px] bottom-2 "
      />

      <img
        src={line}
        alt="logo"
        height={600}
        width={600}
        className="object-contain  relative left-[250px] bottom-20  mix-blend-darken "
      />

      <div className="flex items-center justify-center font-[Lyon-Text] pt-5  ">
        <h2 className="text-3xl flex font-medium  ">
          "We got rid of nearly a dozen different tools because of <br></br>what
          Notion does for us."
        </h2>
      </div>
      <div className="flex  justify-center  gap-3">
        <img
          src={metalab}
          alt="metalab"
          height={120}
          width={120}
          className="object-contain"
        />
        <h5 className="font-[Segoe UI] leading-none"><span className="font-medium mr-[190px]">Justin Watt</span><br></br>Director of Ops & Marketing, MetaLab</h5>
      </div>
    </div>
  );
};

export default MidImg;
