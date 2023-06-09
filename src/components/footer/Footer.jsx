import styles from "../../constants/style";

import { footerLinks, socialMedia } from "../../constants/index";
import  logoRemoveBg  from "../../assets/images/logonobg.svg";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col z-10`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logoRemoveBg}
            alt="medsharing"
            className="w-[72px] h-[72px] bg-white rounded-full object-contain"
          />
          <p className={`${styles.paragraph} mt-4 maw-w-[310px]`}>
            {" "}
            Medsharing <br />
            le SaaS au service de vos études{" "}
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-wrap flex-row justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>

              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li key={link.id}
                    className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <NavLink  to={link.link}>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ">
          2023 Medsharing.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              width={21}
              height={21}
              className={`object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
