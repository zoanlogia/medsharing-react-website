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
import {  useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.jsx";

import Counters from "../../components/Counters.jsx";

const LandingPage = () => {
  const [theme, setTheme] = useState('light');



  return (
    
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
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
    </ThemeContext.Provider>
  );
};

export default LandingPage;
