import { categories, techStacks } from "../data/TechStack";
import { useState } from "react";

const TechStack = () => {
  const [category, setCategory] = useState("Backend");
  return (
    <>
      <div className="flex flex-wrap gap-9 justify-center mb-12 mx-4 sm:mx-0">
        {categories.map((item, index) =>
          item == category ? (
            <p
              key={index}
              className="text-sm sm:text-base text-left font-semibold bg-clip-text text-transparent bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 cursor-pointer"
            >
              {item}
              <span className="block max-w-[30%] h-[2.5px] bg-top bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mx-auto transition-all"></span>
            </p>
          ) : (
            <p
              key={index}
              className="text-sm sm:text-base text-left text-primaryText cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-bl hover:from-mainBlue-700 hover:to-darkerBlue-400 group"
              onClick={() => setCategory(item)}
            >
              {item}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2.5px] bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400"></span>
            </p>
          )
        )}
      </div>
      <div className="flex flex-wrap justify-center pb-10 sm:pb-0 xl:mx-64">
        {techStacks
          .filter((techStack) => techStack.category === category)
          .map((techStack, index) => (
            <div
              className="flex-[0_0_15%] m-6 flex justify-center h-14"
              key={index}
            >
              <img src={techStack.image} alt={techStack.name} />
            </div>
          ))}
      </div>
    </>
  );
};

export default TechStack;
