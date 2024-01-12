import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import { m } from "framer-motion";
import { StaggeredAnimation, Opacity } from "../components/AnimateComponent";
import { ScreenshotCarousel } from "../components/Carousel";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = products.find((item) => item.slug === slug);
    if (data) {
      setProduct(data);
    }
  }, [slug]);
  const OPTIONS = { align: "center" };

  return product ? (
    <>
      <section id="header">
        <StaggeredAnimation>
          <div
            id="header-product-detail"
            className="flex items-start flex-col col-span-10 ml-10 mt-8 md:mx-20 md:mt-16"
          >
            <m.div
              variants={Opacity}
              className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
            />
            <m.h1
              variants={Opacity}
              className="text-3xl lg:text-4xl font-bold text-left text-primaryText"
            >
              {product.title}
            </m.h1>
          </div>
        </StaggeredAnimation>
      </section>
      <div className="h-[1px] w-full bg-[#E7DAED] mt-7 mb-5 md:mt-20 sm:mb-16"></div>
      <section
        id="brief-container"
        className="grid grid-cols-10 items-center px-10 max-lg:gap-9 mb-20"
      >
        <div className="col-span-10 sm:col-span-5 max-w-lg place-self-start sm:place-self-center">
          <StaggeredAnimation>
            <m.div
              variants={Opacity}
              className="p-3 bg-[#F4F8FF] max-w-fit rounded-lg font-medium text-xs sm:text-sm text-[#34113F]"
            >
              Produk Kami
            </m.div>
            <m.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl text-left font-semibold text-primaryText mt-4 mb-3 sm:mb-5"
            >
              Ringkasan Produk
            </m.h1>
            <m.p
              variants={Opacity}
              className="leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText mb-2"
            >
              Peran Kami
            </m.p>
            <div className="flex flex-wrap gap-y-1">
              {product.roles.map((role, index) => (
                <m.p
                  variants={Opacity}
                  key={index}
                  className="leading-6 sm:leading-7 text-base sm:text-lg text-left text-headerText font-bold flex-[0_0_50%]"
                >
                  {role}
                </m.p>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
        <div className="col-span-10 sm:col-span-4 place-self-start sm:place-self-center">
          <StaggeredAnimation>
            <m.p
              variants={Opacity}
              className="text-xs sm:text-sm text-left text-secondaryText mb-1"
            >
              {product.description}
            </m.p>
            <div className="flex flex-wrap gap-y-1 sm:max-md:gap-x-4">
              {product.information.map((info, index) => (
                <div
                  className="flex-[0_0_50%] sm:max-md:flex-[0_0_100%] mt-4"
                  key={index}
                >
                  <m.p
                    variants={Opacity}
                    className="leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText"
                  >
                    {info.title}
                  </m.p>
                  <m.p
                    variants={Opacity}
                    className="leading-6 sm:leading-7 text-base sm:text-lg text-left text-headerText font-bold "
                  >
                    {info.content}
                  </m.p>
                </div>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>
      <section
        id="screenshot-container"
        className="bg-secondaryBg relative py-4 mb-20"
      >
        <StaggeredAnimation>
          <div
            id="header-screenshot"
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
              Screenshot
            </m.h1>
          </div>
          <m.div variants={Opacity} className="sandbox__carousel">
            <ScreenshotCarousel
              slides={product.screenshots}
              options={OPTIONS}
            />
          </m.div>
        </StaggeredAnimation>
      </section>
      <Footer />
    </>
  ) : (
    <div>Not Found</div>
  );
};

export default ProductDetail;
