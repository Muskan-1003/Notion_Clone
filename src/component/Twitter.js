import React from "react";
import Swipe from "./Slider/Swipe";
import twitter1 from "../assets/twitter-1.avif";
import twitter2 from "../assets/twitter-2.png";
import twitter3 from "../assets/twitter-3.png";

const Twitter = () => {
  return (
    <div className="flex gap-3">
      <div className="w-[600px] h-[700px] rounded-lg bg-black/5 p-10">
        <Swipe />
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="bg-black/5 w-[327px] h-[180px] text-left flex items-start flex-col justify-center pl-[20px] rounded-lg">
          <div className="flex gap-2">
            <img
              src={twitter1}
              alt="welcome"
              height={40}
              width={40}
              className="object-contain rounded-full"
            />
            <div>
              <h4 className="font-bold">Deborah Mecca</h4>
              <p>@debmecca</p>
            </div>
          </div>
          <h6 className="font-medium tracking-wider pt-5 leading-tight">
            I used to HATE documenting things. And then I started using
            <span className="text-blue-400">@NotionHQ</span> and I document a
            lot. A LOT A LOT. Now I just realize that it wasn't that I hated
            documenting, I just hated Google Docs.
          </h6>
        </div>
        <div className="bg-black/5 w-[327px] h-[180px] text-left flex items-start flex-col justify-center pl-[20px] rounded-lg">
          <div className="flex gap-2">
            <img
              src={twitter2}
              alt="welcome"
              height={40}
              width={40}
              className="object-contain rounded-full"
            />
            <div>
              <h4 className="font-bold">André Blackman</h4>
              <p>@mindofandre</p>
            </div>
          </div>
          <h6 className="font-medium tracking-wider pt-5 leading-tight">
            One of the most incredible things about{" "}
            <span className="text-blue-500">@NotionHQ</span>
            the dynamic community being built - creating and sharing at its
            best.
          </h6>
        </div>
        <div className="bg-black/5 w-[327px] h-[180px] text-left flex items-start flex-col justify-center pl-[20px] rounded-lg">
          <div className="flex gap-2">
            <img
              src={twitter3}
              alt="welcome"
              height={40}
              width={40}
              className="object-contain rounded-full"
            />
            <div>
              <h4 className="font-bold">Oliver Peyre</h4>
              <p>@opeyre</p>
            </div>
          </div>
          <h6 className="font-medium tracking-wider pt-5 leading-tight">
            <span className="text-blue-500">@NotionHQ</span>
            Truly impressed by the velocity and quality of your work. Making
            using Notion even more fun week after week!
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
