import { motion } from "framer-motion";

export const Opacity = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: {
    opacity: 0,
  },
};

export function SlideInOut({ children }) {
  return (
    <>
      {children && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

export function FadeIn({ children }) {
  return (
    <>
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

export function StaggeredAnimation({ children }) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
