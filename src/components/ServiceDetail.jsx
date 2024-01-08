import { m } from "framer-motion";
import {
  StaggeredAnimation,
  FadeIn,
  Opacity,
} from "../components/AnimateComponent";

const DetailList = ({ icon, title, description }) => {
  return (
    <m.div variants={Opacity} className="flex gap-6 mb-5">
      <div className="min-w-[48px] h-12 bg-mainBlue-500 rounded-lg flex justify-center items-center">
        <img src={icon} alt="icon" className="h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg sm:text-xl text-primaryText">
          {title}
        </h3>
        <p className="font-normal text-xs sm:text-sm text-secondaryText mt-3">
          {description}
        </p>
      </div>
    </m.div>
  );
};

const ServiceDetail = ({ service, isReverse }) => {
  return (
    <section
      id={`services-${service.title}`}
      className={`grid grid-cols-1 sm:grid-cols-10 gap-y-10 sm:gap-y-12 lg:gap-y-20 sm:gap-x-10 place-items-start px-20 mb-16 sm:mb-24 ${
        isReverse && "bg-secondaryBg py-10"
      }`}
    >
      <div className="col-span-10">
        <StaggeredAnimation>
          <div className="grid grid-cols-10">
            <div
              id={`header-services-${service.title}`}
              className="flex items-start justify-start flex-col mb-2 col-span-10"
            >
              <m.div
                variants={Opacity}
                className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
              />
              <m.h1
                variants={Opacity}
                className="text-2xl lg:text-3xl font-bold text-left text-primaryText"
              >
                {service.title}
              </m.h1>
            </div>
            <m.p
              variants={Opacity}
              className="my-3 col-span-10 lg:col-span-5 text-sm sm:text-base text-left text-secondaryText"
            >
              {service.content}
            </m.p>
          </div>
        </StaggeredAnimation>
      </div>
      <div
        className={`col-span-10 lg:col-span-5 rounded pb-0 max-lg:place-self-center ${
          isReverse ? "order-1 lg:order-2  lg:place-self-end" : "order-1"
        }`}
      >
        <FadeIn>
          <img
            src={service.illustration}
            alt={`services-${service.title}`}
            className="rounded-lg sm:max-lg:max-h-80"
          />
        </FadeIn>
      </div>
      <div
        className={`col-span-10 lg:col-span-5 rounded self-start ${
          isReverse ? "order-2 lg:order-1" : "order-2"
        }`}
      >
        <StaggeredAnimation>
          <div className="grid grid-cols-10 gap-y-5 sm:gap-x-10">
            <div className="col-span-10">
              {service.detailList?.map((detail, index) => (
                <DetailList
                  icon={detail.icon}
                  title={detail.title}
                  description={detail.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </StaggeredAnimation>
      </div>
    </section>
  );
};

export default ServiceDetail;
