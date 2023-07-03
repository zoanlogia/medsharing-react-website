import CardDeal from "../../components/cards/CardDeal.jsx";
import Counters from "../../components/counters/Counters.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Billing from "../../components/sections/Billing.jsx";
import Business from "../../components/sections/Business.jsx";
import Cta from "../../components/sections/Cta.jsx";
import Hero from "../../components/sections/Hero.jsx";
import Stats from "../../components/sections/Stats.jsx";
import Testimonials from "../../components/sections/Testimonials.jsx";
import styles from "../../constants/style";

import { useTheme } from "../../hooks/useTheme.jsx";

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
          
            <Hero />
          
          {/* <Hero2 /> */}
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
            <Stats />
          
          <div className="h-[100vh]">
            <Business />
          </div>
          <div className="h-[100vh]">
            <Billing />
          </div>
          <div className="h–[100vh]">
            <CardDeal />
            <Counters />
          </div>
          <div className="h–[100vh]">
            <Testimonials />
          </div>
          
            <Cta />
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
