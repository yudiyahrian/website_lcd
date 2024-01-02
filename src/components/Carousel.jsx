import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Card from "./Card";
import "../css/embla.css";
import Autoplay from "embla-carousel-autoplay";
import { DotButton, NextButton, PrevButton } from "./CarouselButton";
import { NavLink } from "react-router-dom";
import arrowRight from "../assets/arrow_right.svg";
import Ellipse from "../assets/Ellipse.svg";

export const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [snapped, setSnapped] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames(),
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const ref = useRef();
  const allTheRefs = useRef([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback(
    (emblaApi) => {
      const snapStatus = allTheRefs.current.map((slideRef) =>
        slideRef.classList.contains("is-snapped")
      );
      setSnapped(snapStatus);
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    [selectedIndex]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="embla">
      <h1 className="flex justify-center text-2xl lg:text-3xl font-bold text-primaryText pb-9">
        Services we offer
      </h1>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((service, index) => (
            <div
              ref={(el) => (allTheRefs.current[index] = el)}
              className="embla__slide embla__class-names"
              key={index}
            >
              <Card
                icon={service.icon}
                title={service.title}
                content={service.content}
                isActive={snapped[index]}
              />
            </div>
          ))}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => scrollTo(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <NavLink
          to="/services"
          className="flex justify-end mr-4 mt-7 sm:mr-6 md:mr-8"
        >
          <p className="font-semibold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mr-3 sm:mr-4">
            Read more our services
          </p>
          <img src={arrowRight} alt="arrow_right" />
        </NavLink>
      </div>
    </div>
  );
};

export const Internship = (props) => {
  const { slides, options } = props;
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <>
      <div
        id="header-internship"
        className="flex items-start flex-col mb-8 mx-16"
      >
        <div className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4" />
        <h1 className="text-2xl lg:text-3xl font-normal text-left text-primaryText">
          Meet the People <br className="block mt-2 content-['']" />
          <span className="text-2xl lg:text-3xl font-bold text-primaryText">
            We are Working With
          </span>
        </h1>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
      <div className="sandbox__carousel">
        <img src={Ellipse} className="absolute -top-9 right-[30%] w-14" />
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="internship__container">
              {slides.map((internship, index) => (
                <div className="internship" key={index}>
                  <img src={internship.image} alt={internship.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
