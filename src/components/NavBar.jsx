import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LcdLogo from "../assets/LCD_FULL_LOGO.svg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Profile", path: "/profile" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      className="sm:max-2xl:px-10 h-16 md:h-18 shadow-lg"
    >
      <NavbarContent>
        <NavbarBrand>
          <NavLink to="/">
            <img src={LcdLogo} className="h-10 sm:h-12" alt="Lcd Logo" />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex sm:gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            className="group text-gray-600 transition-all duration-300 ease-in-out"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 bg-left-bottom bg-gradient-to-r from-mainBlue-600 to-mainBlue-700 bg-[length:100%_2.5px] bg-no-repeat rounded sm:font-semibold transaction py-1"
                  : "bg-bottom bg-gradient-to-r from-mainBlue-600 to-mainBlue-700 bg-[length:0%_2.5px] bg-no-repeat group-hover:text-gray-800 group-hover:bg-[length:100%_2.5px] transition-all duration-500 ease-out py-1"
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="center" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-gradient-to-r from-mainBlue-600 to-mainBlue-700 rounded font-semibold transition"
                  : "block py-2 px-3 text-gray-600 rounded hover:bg-mainBlue-100 hover:text-gray-800 transition"
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
