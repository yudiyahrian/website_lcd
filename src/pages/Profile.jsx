import { motion } from "framer-motion";
import {
  StaggeredAnimation,
  FadeIn,
  Opacity,
} from "../components/AnimateComponent";
import headerImage from "../assets/profile.svg";
import headerVisiMisi from "../assets/visi.svg";
import photoPlaceholder from "../assets/photo_placeholder.svg";
import { useState, useEffect, useRef } from "react";
import Ellipse from "../assets/Ellipse.svg";
import Footer from "../components/Footer";

const useTruncatedElement = ({ ref }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    const checkTruncation = () => {
      const element = ref.current;

      if (element) {
        const { offsetHeight, scrollHeight } = element;
        if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
          setIsTruncated(true);
        } else {
          setIsTruncated(false);
          setIsShowingMore(false);
        }
      }
    };

    // Run the check after initial rendering and on resize
    checkTruncation();
    window.addEventListener("resize", checkTruncation);

    return () => {
      window.removeEventListener("resize", checkTruncation);
    };
  }, [ref]);

  const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

  return {
    isTruncated,
    isShowingMore,
    toggleIsShowingMore,
  };
};

export default function Profile() {
  const ref = useRef(null);
  const { isTruncated, isShowingMore, toggleIsShowingMore } =
    useTruncatedElement({
      ref,
    });

  return (
    <>
      <section
        id="header-profile"
        className="grid grid-cols-1 sm:grid-cols-10 gap-y-12 sm:gap-x-3 place-items-center px-10"
      >
        <div className="col-span-10 sm:col-span-5 order-2 sm:order-1 pb-20 sm:pb-0 rounded self-center">
          <StaggeredAnimation>
            <motion.h1
              variants={Opacity}
              className="text-3xl lg:text-4xl text-left font-extrabold text-primaryText"
            >
              Profile
              <span className="bg-clip-text text-transparent bg-gradient-to-tl from-darkerBlue-400/40 to-darkerBlue-400 font-bold">
                {" "}
                Light Code Digital
              </span>
            </motion.h1>
            <motion.p
              variants={Opacity}
              className="my-7 sm:my-10 leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText"
            >
              Kami adalah perusahaan Teknologi Informasi yang bergerak dan fokus
              di bidang pegembangan perangkat lunak, konsultasi IT dan resource
              sharing.
            </motion.p>
          </StaggeredAnimation>
        </div>
        <div className="col-span-10 sm:col-span-5 order-1 sm:order-2 rounded pb-0 sm:pb-20">
          <FadeIn>
            <img src={headerImage} alt="profile" className="rounded-lg" />
          </FadeIn>
        </div>
      </section>
      <section
        id="about-us"
        className="bg-secondaryBg px-12 py-6 relative mb-20"
      >
        <StaggeredAnimation>
          <motion.img
            variants={Opacity}
            src={Ellipse}
            className="absolute -z-10 -top-7 left-1/3 md:left-1/4"
          />
          <motion.img
            variants={Opacity}
            src={Ellipse}
            className="absolute -z-10 -bottom-7 right-1/3 md:right-1/4"
          />
          <div id="header-about-us" className="flex items-center flex-col mb-8">
            <motion.div
              variants={Opacity}
              className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
            />
            <motion.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl font-bold text-center text-primaryText"
            >
              Tentang kami
            </motion.h1>
          </div>
          <motion.p
            variants={Opacity}
            ref={ref}
            className={`my-7 leading-6 sm:leading-7 sm:my-10 text-sm sm:text-base text-left text-secondaryText ${
              !isShowingMore && "line-clamp-5"
            }`}
          >
            Light Code Digital didirikan pada Oktober 2023. Light Code Digital
            (LCD) adalah perusahaan Teknologi Informasi yang bergerak dan fokus
            di bidang pegembangan perangkat lunak, konsultasi IT dan resource
            sharing. <br className="block mt-2 content-['']" />
            LCD sebagai rekanan bisnis yang handal dan dipercaya, memberikan
            solusi untuk semua kebutuhan bisnis Anda akan solusi Teknologi
            Informasi. Fokus pencapaian kami adalah pada hasil yang berkualitas
            dan kepuasan pelanggan.
          </motion.p>
          {isTruncated && (
            <motion.button
              variants={Opacity}
              onClick={toggleIsShowingMore}
              className="text-base text-left text-darkerBlue-600 cursor-pointer"
            >
              {isShowingMore ? "Show less" : "Show more"}
            </motion.button>
          )}
        </StaggeredAnimation>
      </section>
      <section
        id="visi-misi"
        className="grid grid-cols-1 sm:grid-cols-10 gap-y-12 sm:gap-x-10 place-items-center px-10 mb-20"
      >
        <div className="col-span-10 sm:col-span-10 lg:col-span-5 order-1 rounded pb-0 sm:pb-20">
          <FadeIn>
            <img
              src={headerVisiMisi}
              alt="Visi misi"
              className="rounded-lg sm:max-lg:max-h-96"
            />
          </FadeIn>
        </div>
        <div className="col-span-10 sm:col-span-10 lg:col-span-5 order-2 pb-20 sm:pb-0 rounded self-center">
          <StaggeredAnimation>
            <div className="grid grid-cols-10 gap-y-5 sm:gap-x-10">
              <div className="col-span-10 sm:max-lg:col-span-5">
                <div
                  id="header-visi"
                  className="flex items-start flex-col mb-4"
                >
                  <motion.div
                    variants={Opacity}
                    className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
                  />
                  <motion.h1
                    variants={Opacity}
                    className="text-2xl lg:text-3xl font-bold text-left text-primaryText"
                  >
                    Visi
                  </motion.h1>
                </div>
                <motion.p
                  variants={Opacity}
                  className="my-3 leading-6 sm:leading-7 sm:my-5 text-sm sm:text-base text-left text-secondaryText"
                >
                  Menjadi salah satu perusahaan konsultan IT yang dapat
                  memberikan solusi yang tepat, efektif sesuai kebutuhan dan
                  menjadi system integrator IT yang terpecaya yang mampu
                  bersaing dalam dunia global. Dengan berfokus pada pengembangan
                  perangkat lunak, resources sharing, sistem integrasi dan
                  konsultasi IT.
                </motion.p>
              </div>
              <div className="col-span-10 sm:max-lg:col-span-5 ">
                <div
                  id="header-misi"
                  className="flex items-start flex-col mb-4"
                >
                  <motion.div
                    variants={Opacity}
                    className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
                  />
                  <motion.h1
                    variants={Opacity}
                    className="text-2xl lg:text-3xl font-bold text-left text-primaryText"
                  >
                    Misi
                  </motion.h1>
                </div>
                <ul className="list-disc">
                  <motion.li
                    variants={Opacity}
                    className="my-3 leading-6 sm:leading-7 sm:my-5 text-sm sm:text-base text-left text-secondaryText"
                  >
                    Mengedepankan profesionalisme, kemampuan individu dan tim
                    dalam berkomunikasi guna mengumpulkan informasi terkait
                    dengan kebutuhan klien agar menghasilkan produk/solusi yang
                    tepat dan sesuai.
                  </motion.li>
                  <motion.li
                    variants={Opacity}
                    className="my-3 leading-6 sm:leading-7 sm:my-5 text-sm sm:text-base text-left text-secondaryText"
                  >
                    Menyediakan layanan sistem integrasi, meliputi implementasi,
                    pengembangan perangkat lunak sampai pada sistem dapat
                    digunakan dan berjalan dengan baik serta melakukan
                    maintenance pada sistem.
                  </motion.li>
                  <motion.li
                    variants={Opacity}
                    className="my-3 leading-6 sm:leading-7 sm:my-5 text-sm sm:text-base text-left text-secondaryText"
                  >
                    Melayani konsultasi IT guna meningkatkan efektivitas,
                    efesiensi dan produktivitas bisnis perusahaan.
                  </motion.li>
                </ul>
              </div>
            </div>
          </StaggeredAnimation>
        </div>
      </section>
      <section
        id="organization-structure"
        className="bg-secondaryBg px-12 py-6 relative mb-20"
      >
        <img
          src={Ellipse}
          className="absolute -z-10 -bottom-7 left-1/3 md:left-1/4"
        />
        <img
          src={Ellipse}
          className="absolute -z-10 -top-7 right-1/3 md:right-1/4"
        />
        <div
          id="header-organization-structure"
          className="flex items-center flex-col mb-8"
        >
          <div className="w-16 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4" />
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-primaryText">
            Struktur organisasi
          </h1>
        </div>
        <div className="w-full h-[600px] flex items-center justify-center bg-[#EFF2F6]">
          <img src={photoPlaceholder} alt="struktur organisasi" />
        </div>
      </section>
      <Footer />
    </>
  );
}
