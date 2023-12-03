import { LuArrowRight } from "react-icons/lu";


const GridItem = ({ imgSrc, title }) => {
    return (
      <div className="bg-black/5 w-[190px] h-[190px] text-left flex items-start flex-col justify-center pl-[20px] rounded-lg">
        <img
          src={imgSrc}
          alt={title}
          height={40}
          width={40}
          className="object-contain rounded-full"
        />
        <h4 className="font-bold">{title}</h4>
        <button className="rounded-lg font-[Segoe UI] font-medium w-60 h-8 text-sky-400 pt-4 text-sm flex">
          Get templates
          <LuArrowRight className="h-4 w-7" />
        </button>
      </div>
    );
  };
  
  export default GridItem;