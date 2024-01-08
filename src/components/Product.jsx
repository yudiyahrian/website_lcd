import { m } from "framer-motion";
import { Opacity } from "../components/AnimateComponent";
const Product = ({
  background,
  backgroundImage,
  image,
  title,
  description,
}) => {
  return (
    <>
      <m.div
        variants={Opacity}
        className={`${background} w-full grid grid-cols-10 border-solid border-1 border-[#E7DAED] rounded-lg mb-6 shadow-cardShadow`}
      >
        <div
          className={`${backgroundImage} rounded-lg col-span-10 sm:col-span-4 flex justify-center items-center`}
        >
          <img src={image} className="max-h-72" />
        </div>
        <div className="mx-7 sm:mx-10 my-8 sm:my-12 col-span-10 sm:col-span-6">
          <h1 className="text-xl lg:text-2xl font-semibold text-left text-primaryText mb-5 sm:mb-6">
            {title}
          </h1>
          <p className="font-normal text-xs sm:text-sm text-secondaryText line-clamp-5 mb-6 sm:mb-10">
            {description}
          </p>
          <p className="font-semibold text-xs md:text-sm text-end text-transparent bg-clip-text bg-gradient-to-bl from-[#F36380] to-[#57007B] mr-3 sm:mr-4">
            Read more..
          </p>
        </div>
      </m.div>
    </>
  );
};

Product.defaultProps = {
  background: "#d7e3fc",
  backgroundImage: "#c1d3fe",
  image: "",
  title: "title",
  description: "description",
};

export default Product;
