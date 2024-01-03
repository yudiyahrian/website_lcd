import headerImage from "../assets/header.svg";
import arrowRight from "../assets/arrow_right.svg";
import Ellipse from "../assets/Ellipse.svg";
import decoArrowUp from "../assets/deco_arrow_up.svg";
import decoArrowDown from "../assets/deco_arrow_down.svg";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import "@nextui-org/ripple";
import {
  StaggeredAnimation,
  FadeIn,
  Opacity,
} from "../components/AnimateComponent";
import { services } from "../data/services";
import { EmblaCarousel } from "../components/Carousel";
import Product from "../components/Product";
import { products } from "../data/Products";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function Home() {
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
              variants={Opacity}
              className="text-3xl lg:text-4xl text-left font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-darkerBlue-400/40 to-darkerBlue-400"
            >
              Light Code Digital
            </motion.h1>
            <motion.p
              variants={Opacity}
              className="my-7 sm:my-10 leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText"
            >
              Memberikan solusi untuk semua kebutuhan bisnis Anda terkait
              Teknologi INFORMASI
            </motion.p>
            <div className="flex items-center justify-center sm:justify-start">
              <MotionButton
                variants={Opacity}
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
      <section id="recent-product" className="px-20 mb-10">
        <div className="w-full">
          <div
            id="header-recent-product"
            className="flex items-center flex-col mb-8"
          >
            <div className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4" />
            <h1 className="text-2xl lg:text-3xl font-normal text-center text-primaryText">
              Our recent <br className="block mt-2 content-['']" />
              <span className="text-2xl lg:text-3xl font-bold text-primaryText">
                Products
              </span>
            </h1>
          </div>
          <div id="product-list">
            {products.map((product, index) => (
              <Product
                key={index}
                background={product.background}
                backgroundImage={product.backgroundImage}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
          <div className="flex justify-end">
            <p className="font-semibold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mr-3 sm:mr-4">
              Read more our products
            </p>
            <img src={arrowRight} alt="arrow_right" />
          </div>
        </div>
      </section>
      <section
        id="our-tech-stack"
        className="relative w-full bg-secondaryBg mb-32"
      >
        <img src={Ellipse} className="absolute -bottom-7 left-[10%] w-14" />
        <div
          id="header-tech-stack"
          className="flex items-center flex-col mb-8 py-8"
        >
          <div className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4" />
          <h1 className="text-2xl lg:text-3xl font-normal text-center text-primaryText">
            Our
            <br className="block mt-2 content-['']" />
            <span className="text-2xl lg:text-3xl font-bold text-primaryText">
              Tech Stack
            </span>
          </h1>
        </div>
        <div>
          <TechStack />
        </div>
      </section>
      {/* <section id="internship" className="mb-20">
        <div className="w-full">
          <Internship slides={internship} options={OPTIONS} />
        </div>
      </section> */}
      <Footer />
    </>
  );
}
