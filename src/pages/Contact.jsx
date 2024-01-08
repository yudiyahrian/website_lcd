import { motion } from "framer-motion";
import { StaggeredAnimation, Opacity } from "../components/AnimateComponent";
import Location from "../assets/location.svg";
import Mail from "../assets/mail.svg";
import Phone from "../assets/phone.svg";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <section id="header">
        <StaggeredAnimation>
          <div
            id="header-contact"
            className="flex items-center flex-col mb-16 col-span-10"
          >
            <motion.div
              variants={Opacity}
              className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
            />
            <motion.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl font-bold text-left text-primaryText"
            >
              Kontak Kami
            </motion.h1>
          </div>
        </StaggeredAnimation>
      </section>
      <section
        id="contact-information"
        className="bg-secondaryBg grid grid-cols-10 items-center px-16 sm:px-10 max-lg:gap-9 py-16 mb-20"
      >
        <div className="col-span-10 sm:col-span-5 max-w-lg place-self-start sm:place-self-center">
          <StaggeredAnimation>
            <motion.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl text-left font-semibold text-primaryText"
            >
              Light Code Digital
            </motion.h1>
            <motion.p
              variants={Opacity}
              className="mt-3 sm:mt-4 leading-6 sm:leading-7 text-sm sm:text-base text-left text-secondaryText"
            >
              Terima kasih sudah berkunjung! Jika Anda memiliki pertanyaan
              tentang LCD, silakan hubungi kami melalui kontak di halaman ini.
            </motion.p>
          </StaggeredAnimation>
        </div>
        <div className="col-span-10 sm:col-span-5 place-self-start sm:place-self-center">
          <StaggeredAnimation>
            <motion.h1
              variants={Opacity}
              className="text-xl lg:text-2xl text-left font-semibold text-primaryText mb-4"
            >
              Informasi Kontak
            </motion.h1>
            <motion.div
              variants={Opacity}
              className="flex gap-3 mb-5 items-center"
            >
              <div className="min-w-[40px] h-10 bg-[#EDECE2] rounded-lg flex justify-center items-center">
                <img src={Location} alt="icon" className="h-5" />
              </div>
              <div>
                <p className="font-normal text-xs sm:text-sm text-secondaryText">
                  Jl. Karet Hijau no.52 Beji Timur, Depok - Jawa Barat 16421
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={Opacity}
              className="flex gap-3 mb-5 items-center"
            >
              <div className="min-w-[40px] h-10 bg-[#EDECE2] rounded-lg flex justify-center items-center">
                <img src={Mail} alt="icon" className="h-5" />
              </div>
              <div>
                <p className="font-normal text-xs sm:text-sm text-secondaryText">
                  info@lightcodedigital.com
                </p>
              </div>
            </motion.div>
            <motion.div variants={Opacity} className="flex gap-3 items-center">
              <div className="min-w-[40px] h-10 bg-[#EDECE2] rounded-lg flex justify-center items-center">
                <img src={Phone} alt="icon" className="h-5" />
              </div>
              <div>
                <p className="font-normal text-xs sm:text-sm text-secondaryText">
                  021-7721-0358 (199)
                </p>
              </div>
            </motion.div>
          </StaggeredAnimation>
        </div>
      </section>
      <Footer />
    </>
  );
}
