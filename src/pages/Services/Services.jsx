import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import {Navbar, Footer, SectionServices} from "../../components/index";


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
        <div className={`${styles.boxWidth}$`}>
          <div className={`${layout.section}`}>
            <SectionServices />
          </div>
            <div className={layout.section}>
              
            </div>
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
