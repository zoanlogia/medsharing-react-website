import styles from "../../constants/style";
import {
  Navbar,
  Footer,
} from "../../components/index";

import { useTheme } from "../../hooks/useTheme.jsx";
import CardAbout from "../../components/CardAbout.jsx";

const about = () => {
  
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
          <CardAbout />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default about;
