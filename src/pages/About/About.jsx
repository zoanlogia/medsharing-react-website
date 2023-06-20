import styles, { layout } from "../../constants/style";
import { Navbar, Footer, CardAbout2, CardAbout1 } from "../../components/index";
import { useTheme } from "../../hooks/useTheme.jsx";

const About = () => {
  const {theme} = useTheme();
  
  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={layout.section}>
            <CardAbout1 />
          </div>

          <div className={layout.section}>
            <CardAbout2 />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
