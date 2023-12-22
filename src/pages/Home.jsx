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
      <div className="grid grid-cols-1 sm:grid-cols-10 place-items-center">
        <div className="col-span-10 sm:col-span-5 rounded">
          <StaggeredAnimation>
            <motion.h1 variants={item} className="text-4xl text-left">
              Lorem ipsum
            </motion.h1>
            <motion.p variants={item} className="my-4 text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              veritatis ea quisquam architecto maiores corporis delectus ad
              cupiditate quibusdam quod laudantium ipsum odit odio quo cum dolor
              quaerat, facilis dolorem?
            </motion.p>
            <MotionButton variants={item} color="primary" variant="ghost">
              HAHAHHA
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
