import headerImage from "../assets/header.svg";
import Ellipse from "../assets/Ellipse.svg";
import decoArrowUp from "../assets/deco_arrow_up.svg";
import decoArrowDown from "../assets/deco_arrow_down.svg";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import "@nextui-org/ripple";
import { StaggeredAnimation, FadeIn } from "../components/AnimateComponent";
import { services } from "../data/services";
import EmblaCarousel from "../components/EmblaCarousel";

export default function Home() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: {
      opacity: 0,
    },
  };

  const OPTIONS = { align: "center", loop: true };

  const MotionButton = motion(Button);
  return (
    <>
      <section
        id="header"
        className="grid grid-cols-1 sm:grid-cols-10 gap-y-12 place-items-center px-10"
      >
        <div className="col-span-10 sm:col-span-5 order-2 sm:order-1 pb-20 sm:pb-0 rounded self-center">
          <StaggeredAnimation>
            <motion.h1
              variants={item}
              className="text-3xl lg:text-4xl text-left font-light text-primaryText"
            >
              Great{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-darkerBlue-400 to-darkerBlue-400/40 font-bold">
                Product
              </span>{" "}
              is <span className="font-extrabold">built by great</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-darkerBlue-400/40 to-darkerBlue-400 font-bold">
                {" "}
                teams{" "}
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="my-7 sm:my-10 text-sm sm:text-base text-left text-secondaryText"
            >
              We help build and manage a team of world-class developers to bring
              your vision to life
            </motion.p>
            <div className="flex items-center justify-center sm:justify-start">
              <MotionButton
                variants={item}
                color="primary"
                className="px-6 py-[22px]"
              >
                Let’s get started!
              </MotionButton>
            </div>
          </StaggeredAnimation>
        </div>
        <div className="col-span-10 sm:col-span-5 order-1 sm:order-2 rounded pb-0 sm:pb-20">
          <FadeIn>
            <img src={headerImage} alt="image" className="rounded-lg" />
          </FadeIn>
        </div>
      </section>
      <section id="service-carousel" className="relative w-full mb-52">
        <img src={Ellipse} className="absolute -top-7 left-1/3 md:left-1/4" />
        <img
          src={Ellipse}
          className="absolute -bottom-7 right-1/3 md:right-1/4"
        />
        <div className="sandbox__carousel">
          <EmblaCarousel slides={services} options={OPTIONS} />
        </div>
        <img
          src={Ellipse}
          className="absolute h-4 w-4 -bottom-24 md:-bottom-52 left-[40%] md:left-1/3 "
        />
        <img
          src={decoArrowDown}
          className="absolute -bottom-32 md:-bottom-[16.5rem] w-28 md:w-auto right-[15%]"
        />
        <img
          src={decoArrowUp}
          className="absolute -bottom-20 md:-bottom-[11.5rem] left-[15%] w-28 md:w-auto"
        />
      </section>
      <section id="recent-product">
        <div className="w-full">
          <div
            id="header-recent-product"
            className="flex items-center flex-col"
          >
            <div className="w-16 h-1 bg-gradient-to-bl from-[#F36380] to-[#57007B] mb-4" />
            <h1 className="text-xl lg:text-2xl font-normal text-center text-primaryText">
              Our recent <br className="block mt-2 content-['']" />
              <span className="text-xl lg:text-2xl font-bold text-primaryText">
                Products
              </span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
