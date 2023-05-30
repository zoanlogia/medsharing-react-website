import styles from "../../constants/style";
import {
  Navbar,
  Footer,
  Billing,
  Business,
  CardDeal,
  Hero,
  Stats,
  Testimonials,
  Cta,
  // Clients,
} from "../../components/index";

import Counters from "../../components/Counters.jsx";
import { useTheme } from "../../hooks/useTheme.jsx";
import Hero2 from "../../components/Hero2.jsx";

const LandingPage = () => {
  
  const { theme } = useTheme();

  return (
    
    
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Hero /> */}
          <Hero2 />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Counters />
          <Testimonials />
          {/* <Clients />  */}
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
