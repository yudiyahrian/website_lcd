import headerImage from "../assets/header.svg";
import Ellipse from "../assets/Ellipse.svg";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import "@nextui-org/ripple";
import { StaggeredAnimation, FadeIn } from "../components/AnimateComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import { services } from "../data/services";
import Card from "../components/Card";

export default function Home() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: {
      opacity: 0,
    },
  };

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
              className="text-4xl text-left font-light text-primaryText"
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
              className="my-10 text-left text-secondaryText"
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
      <section className="relative h-full w-full">
        <img src={Ellipse} className="absolute -top-7 left-24 sm:left-72" />
        <div className="bg-secondaryBg relative py-6">
          <Swiper
            modules={[Virtual, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides
            initialSlide={2}
            virtual
            grabCursor
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            draggable
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.title} virtualIndex={index}>
                {({ isActive }) => (
                  <Card
                    icon={service.icon}
                    title={service.title}
                    content={service.content}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
