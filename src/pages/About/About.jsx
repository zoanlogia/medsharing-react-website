import CardAbout1 from "@/components/cards/CardAbout1";
import CardAbout2 from "@/components/cards/CardAbout2";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles, { layout } from "@/constants/style";
import { useTheme } from "@/hooks/useTheme";

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
