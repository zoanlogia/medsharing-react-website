import { FormattedMessage } from "react-intl";
import { navLinks } from "../constants";
import { menu, close, logoRemoveBg } from "../assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOCALES } from "../i18n/locales.js";
import ButtonLanguages from "./ButtonLanguages.jsx";
import {ThemeModeButton} from "./themeModeButton.jsx";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

const Navbar = () => {

  const {theme} = useContext(ThemeContext);
  
  const links = navLinks[LOCALES.FRENCH] || navLinks[LOCALES.ENGLISH];


  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={logoRemoveBg}
        alt="medsharing"
        className="w-[40px] h-[40px] box-shadow bg-white rounded-full"
      />
      <h4 className={`ml-3 font-poppins font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] ${theme === "light" ? "text-primary" : "text-white"}`}>Medsharing</h4>
      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((link, index) => (
          <li
            key={link.key}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === links.length - 1 ? "mr-0" : "mr-10"
            } ${theme === "light" ? "text-primary" : "text-white"} mr-10`}
          >
            <Link to={link.path}><FormattedMessage id={link.title} /></Link>
          </li>          
        ))}
        <li>
          <ButtonLanguages/>
        </li>
        <li><ThemeModeButton /></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-h-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {links.map((link, index) => (
              <li
                key={link.key}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === links.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
            <li>
              <ButtonLanguages/>
            </li>
            <li><ThemeModeButton /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
