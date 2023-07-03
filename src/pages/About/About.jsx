import CardAbout1 from "../../components/cards/CardAbout1.jsx";
import CardAbout2 from "../../components/cards/CardAbout2.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import styles, { layout } from "../../constants/style";
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
