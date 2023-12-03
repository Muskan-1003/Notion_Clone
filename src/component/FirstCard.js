import React from "react";
import data from "../utils/slider";

const FirstCard = ({ image,   name, detail}) => {
  return (
    <div>
      <div>
         {
            data.map((card,i)=>(
                <div key={i}>
                    <img src={ card.image}/>
                    <span>{card.name}</span>
                    <p>{card.detail}</p>

                </div>

            ))
         }



    </div>
        
    </div>
  );
};

export default FirstCard;
