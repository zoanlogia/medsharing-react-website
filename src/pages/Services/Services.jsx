import React from "react";
import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const Services = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={layout.section}></div>

          <div className={layout.section}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
