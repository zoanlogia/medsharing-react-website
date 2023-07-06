import React, { Suspense } from "react";
import styles, { layout } from "../../constants/style.js";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";

const CardAbout1 = React.lazy(() =>
  import("../../components/cards/CardAbout1")
);
const CardAbout2 = React.lazy(() =>
  import("../../components/cards/CardAbout2")
);
const Footer = React.lazy(() => import("../../components/footer/Footer"));
const Navbar = React.lazy(() => import("../../components/navbar/Navbar"));

const About = () => {
  const { theme } = useTheme();

  useScrollToTop();

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <Suspense fallback={<div>Chargement...</div>}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={` ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} `}>
            <div className={`${layout.section} lg:h-screen`}>
              <CardAbout1 />
            </div>

            <div className={`${layout.section} lg:h-screen`}>
              <CardAbout2 />
            </div>
            <Footer />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default About;
