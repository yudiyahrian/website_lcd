import headerImage from "../assets/header.svg";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import "@nextui-org/ripple";
import { StaggeredAnimation, FadeIn } from "../components/AnimateComponent";

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
      <div className="grid grid-cols-1 sm:grid-cols-10 gap-y-12 place-items-center">
        <div className="col-span-10 sm:col-span-5 rounded">
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
            <MotionButton
              variants={item}
              color="primary"
              className="px-6 py-[22px]"
            >
              Let’s get started!
            </MotionButton>
          </StaggeredAnimation>
        </div>
        <div className="col-span-10 sm:col-span-5 rounded">
          <FadeIn>
            <img src={headerImage} alt="image" className="rounded-lg" />
          </FadeIn>
        </div>
      </div>
    </>
  );
}
