import headerImage from "../assets/header.svg";
import arrowRight from "../assets/arrow_right.svg";
import Ellipse from "../assets/Ellipse.svg";
import decoArrowUp from "../assets/deco_arrow_up.svg";
import decoArrowDown from "../assets/deco_arrow_down.svg";
import { m } from "framer-motion";
import { Button } from "@nextui-org/react";
import {
  StaggeredAnimation,
  FadeIn,
  Opacity,
} from "../components/AnimateComponent";
import { NavLink, useNavigate } from "react-router-dom";
import { services } from "../data/Services";
import { EmblaCarousel } from "../components/Carousel";
import Product from "../components/Product";
import { products } from "../data/Products";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

export default function Home() {
  const OPTIONS = { align: "center", loop: true };
  const navigate = useNavigate();

  const MotionButton = m(Button);
  return (
    <>
      <section
        id="header"
        className="grid grid-cols-1 sm:grid-cols-10 gap-y-12 place-items-center px-10"
      >
        <div className="col-span-10 sm:col-span-5 order-2 sm:order-1 pb-20 sm:pb-0 rounded self-center">
          <StaggeredAnimation>
            <m.h1
              variants={Opacity}
              className="text-3xl lg:text-4xl text-left font-extrabold bg-clip-text text-transparent bg-gradient-to-tl from-darkerBlue-400/40 to-darkerBlue-400"
            >
              Light Code Digital
            </m.h1>
            <m.p
              variants={Opacity}
              className="my-7 sm:my-10 leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText"
            >
              Memberikan solusi untuk semua kebutuhan bisnis Anda terkait
              Teknologi INFORMASI
            </m.p>
            <div className="flex items-center justify-center sm:justify-start">
              <MotionButton
                variants={Opacity}
                color="primary"
                className="px-6 py-[22px]"
                onPress={() => {
                  setTimeout(() => {
                    navigate("/profile");
                  }, 200);
                }}
              >
                Lihat profil kami
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
        <StaggeredAnimation>
          <m.img
            variants={Opacity}
            src={Ellipse}
            className="absolute -top-7 left-1/3 md:left-1/4"
          />
          <m.img
            variants={Opacity}
            src={Ellipse}
            className="absolute -bottom-7 right-1/3 md:right-1/4"
          />
          <m.div variants={Opacity} className="sandbox__carousel">
            <EmblaCarousel slides={services} options={OPTIONS} />
          </m.div>
          <m.img
            variants={Opacity}
            src={Ellipse}
            className="absolute h-4 w-4 -bottom-24 md:-bottom-52 left-[40%] md:left-1/3 "
          />
          <m.img
            variants={Opacity}
            src={decoArrowDown}
            className="absolute -bottom-32 md:-bottom-[16.5rem] w-28 md:w-auto right-[15%]"
          />
          <m.img
            variants={Opacity}
            src={decoArrowUp}
            className="absolute -bottom-20 md:-bottom-[11.5rem] left-[15%] w-28 md:w-auto"
          />
        </StaggeredAnimation>
      </section>
      <section id="recent-product" className="px-20 mb-10">
        <div className="w-full">
          <StaggeredAnimation>
            <div
              id="header-recent-product"
              className="flex items-center flex-col mb-8"
            >
              <m.div
                variants={Opacity}
                className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
              />
              <m.h1
                variants={Opacity}
                className="text-2xl lg:text-3xl font-bold text-center text-primaryText"
              >
                Produk <br className="block mt-2 content-['']" />
                <span className="font-normal">Baru Kami</span>
              </m.h1>
            </div>
          </StaggeredAnimation>
          <div id="product-list">
            <StaggeredAnimation>
              {products.map((product, index) => (
                <Product
                  key={index}
                  background={product.background}
                  backgroundImage={product.backgroundImage}
                  image={product.image}
                  title={product.title}
                  description={product.description}
                  slug={product.slug}
                />
              ))}
            </StaggeredAnimation>
          </div>
          <FadeIn>
            <div className="flex justify-end">
              <NavLink
                to="/products"
                className="font-semibold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mr-3 sm:mr-4"
              >
                See more our products
              </NavLink>
              <img src={arrowRight} alt="arrow_right" />
            </div>
          </FadeIn>
        </div>
      </section>
      <section
        id="our-tech-stack"
        className="relative w-full bg-secondaryBg mb-32"
      >
        <StaggeredAnimation>
          <m.img
            variants={Opacity}
            src={Ellipse}
            className="absolute -bottom-7 left-[10%] w-14"
          />
          <m.div
            variants={Opacity}
            id="header-tech-stack"
            className="flex items-center flex-col mb-8 py-8"
          >
            <m.div
              variants={Opacity}
              className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
            />
            <m.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl font-bold text-center text-primaryText"
            >
              Teknologi <br className="block mt-2 content-['']" />
              <span className="font-normal">Yang Kami Gunakan</span>
            </m.h1>
          </m.div>
          <m.div variants={Opacity}>
            <TechStack />
          </m.div>
        </StaggeredAnimation>
      </section>
      <Footer />
    </>
  );
}
