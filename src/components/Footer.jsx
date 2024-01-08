import LcdLogo from "../assets/LCD_FULL_LOGO.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="h-[1px] w-full bg-[#E7DAED]"></div>
      <div className="mx-auto max-w-screen-xl space-y-8 px-10  py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={LcdLogo} alt="lcd_logo" className="h-12" />

            <p className="mt-4 max-w-xs text-gray-500">
              Kami siap membantu mewujudkan visi digital Anda. Hubungi kami
              sekarang untuk memulai perjalanan menuju solusi teknologi yang
              inovatif dan efektif.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-medium text-gray-900">Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <NavLink
                    to="/profile"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/products"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Products
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/services"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Contact</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:info@lightcodedigital.com"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    info@lightcodedigital.com
                  </a>
                </li>

                <li>
                  <p className="text-gray-700">021-7721-0358 (199)</p>
                </li>
              </ul>
            </div>
            <ul className="mt-8 flex gap-4 items-end justify-start">
              <li>
                <a
                  href="https://www.instagram.com/lightcodedigital/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText bg-white shadow-activeCardShadow rounded-full transition hover:opacity-75 p-3 inline-flex"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 13 13"
                  >
                    <g clipPath="url(#clip0_135_3741)">
                      <path
                        d="M9.481 0H3.51898C1.57858 0 0 1.57858 0 3.51898V9.4811C0 11.4214 1.57858 13 3.51898 13H9.4811C11.4214 13 13 11.4214 13 9.4811V3.51898C13 1.57858 11.4214 0 9.481 0V0ZM12.2379 9.4811C12.2379 11.0012 11.0012 12.2379 9.481 12.2379H3.51898C1.99881 12.2379 0.762114 11.0012 0.762114 9.4811V3.51898C0.762114 1.99881 1.99881 0.762114 3.51898 0.762114H9.4811C11.0012 0.762114 12.2379 1.99881 12.2379 3.51898V9.4811Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M6.49999 2.9454C4.53995 2.9454 2.9454 4.53995 2.9454 6.49999C2.9454 8.46002 4.53995 10.0546 6.49999 10.0546C8.46002 10.0546 10.0546 8.46002 10.0546 6.49999C10.0546 4.53995 8.46002 2.9454 6.49999 2.9454ZM6.49999 9.29245C4.96028 9.29245 3.70752 8.03978 3.70752 6.49999C3.70752 4.96028 4.96028 3.70752 6.49999 3.70752C8.03978 3.70752 9.29245 4.96028 9.29245 6.49999C9.29245 8.03978 8.03978 9.29245 6.49999 9.29245Z"
                        fill="#1A202C"
                      />
                      <path
                        d="M10.1396 1.68301C9.56035 1.68301 9.08923 2.15423 9.08923 2.73335C9.08923 3.31257 9.56035 3.78379 10.1396 3.78379C10.7188 3.78379 11.19 3.31257 11.19 2.73335C11.19 2.15413 10.7188 1.68301 10.1396 1.68301ZM10.1396 3.02157C9.98068 3.02157 9.85135 2.89224 9.85135 2.73335C9.85135 2.57436 9.98068 2.44513 10.1396 2.44513C10.2986 2.44513 10.4279 2.57436 10.4279 2.73335C10.4279 2.89224 10.2986 3.02157 10.1396 3.02157Z"
                        fill="#1A202C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_135_3741">
                        <rect className="h-4 w-4" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+6287742812548"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primaryText bg-white shadow-activeCardShadow rounded-full transition hover:opacity-75 p-3 inline-flex"
                >
                  <span className="sr-only">Whatsapp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 13 13"
                    fill="currentColor"
                  >
                    <path
                      d="M9.61802 7.87629C9.48741 7.81137 8.63843 7.42185 8.50782 7.35693C8.37721 7.29202 8.24659 7.29202 8.11598 7.42185C7.98537 7.55169 7.72415 7.9412 7.59353 8.07104C7.52823 8.20088 7.39762 8.20088 7.267 8.13596C6.80986 7.9412 6.35272 7.68153 5.96088 7.35693C5.63435 7.03234 5.30782 6.64283 5.0466 6.25331C4.98129 6.12348 5.0466 5.99364 5.11191 5.92872C5.17721 5.8638 5.24252 5.73396 5.37313 5.66904C5.43844 5.60413 5.50374 5.47429 5.50374 5.40937C5.56905 5.34445 5.56905 5.21461 5.50374 5.14969C5.43844 5.08478 5.11191 4.30575 4.98129 3.98115C4.91599 3.52672 4.78538 3.52672 4.65476 3.52672H4.32823C4.19762 3.52672 4.0017 3.65656 3.9364 3.72148C3.54456 4.11099 3.34864 4.56542 3.34864 5.08477C3.41395 5.66904 3.60987 6.25331 4.0017 6.77267C4.72007 7.81137 5.63435 8.65531 6.74456 9.17466C7.07109 9.3045 7.33231 9.43434 7.65884 9.49926C7.98537 9.62909 8.3119 9.62909 8.70374 9.56418C9.16088 9.49926 9.55271 9.17466 9.81394 8.78515C9.94455 8.52547 9.94455 8.2658 9.87924 8.00612L9.61802 7.87629ZM11.2507 1.96867C8.70374 -0.563165 4.58946 -0.563165 2.04252 1.96867C-0.0472685 4.04607 -0.439104 7.2271 0.997628 9.75893L0.0833435 13.0698L3.54456 12.1609C4.52415 12.6803 5.56905 12.94 6.61394 12.94C10.2058 12.94 13.0792 10.0835 13.0792 6.51299C13.1445 4.8251 12.4262 3.20213 11.2507 1.96867ZM9.48741 11.0573C8.63843 11.5767 7.65884 11.9013 6.61394 11.9013C5.63435 11.9013 4.72007 11.6416 3.87109 11.1871L3.67517 11.0573L1.65069 11.5767L2.17314 9.62909L2.04252 9.43434C0.475179 6.83758 1.25885 3.59164 3.80579 1.96867C6.35272 0.345699 9.61802 1.18964 11.1854 3.65656C12.7527 6.1884 12.0343 9.49926 9.48741 11.0573Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#E7DAED]"></div>
      <p className="text-xs text-gray-500 flex justify-center mt-4">
        &copy; 2024. Light Code Digital. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
