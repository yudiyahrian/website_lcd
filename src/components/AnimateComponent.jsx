import { m, LazyMotion, domAnimation } from "framer-motion";

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
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {children}
          </m.div>
        </LazyMotion>
      )}
    </>
  );
}

export function FadeIn({ children }) {
  return (
    <>
      {children && (
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {children}
          </m.div>
        </LazyMotion>
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
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={container}
        initial="hidden"
        whileInView="show"
        exit="exit"
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
