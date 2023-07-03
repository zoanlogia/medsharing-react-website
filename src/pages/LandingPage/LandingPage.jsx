import CardDeal from "@/components/cards/CardDeal";
import Counters from "@/components/counters/Counters";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Billing from "@/components/sections/Billing";
import Business from "@/components/sections/Business";
import Cta from "@/components/sections/Cta";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import styles from "@/constants/style";

import { useTheme } from "@/hooks/useTheme";

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
