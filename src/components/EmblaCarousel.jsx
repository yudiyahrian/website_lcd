import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Card from "./Card";
import "../css/embla.css";
import Autoplay from "embla-carousel-autoplay";
import { DotButton } from "./CarouselButton";
import { NavLink } from "react-router-dom";
import arrowRight from "../assets/arrow_right.svg";

const EmblaCarousel = (props) => {
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

  const onSelect = useCallback((emblaApi) => {
    const snapStatus = allTheRefs.current.map((slideRef) =>
      slideRef.classList.contains("is-snapped")
    );
    setSnapped(snapStatus);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

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
      <h1 className="flex justify-center text-xl lg:text-2xl font-bold text-primaryText pb-9">
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
          <p className="font-semibold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-bl from-[#F36380] to-[#57007B] mr-3 sm:mr-4">
            Read more our services
          </p>
          <img src={arrowRight} alt="arrow_right" />
        </NavLink>
      </div>
    </div>
  );
};

export default EmblaCarousel;
