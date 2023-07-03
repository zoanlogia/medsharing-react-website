import { motion as m } from "framer-motion";
import { useTheme } from "../../hooks/useTheme.jsx";
import { useScrollFadeScaleDown } from "../../hooks/useScrollFadeScale.jsx";
import styles from "../../constants/style";

import Navbar from "../../components/navbar/Navbar.jsx";
import Hero from "../../components/sections/Hero.jsx";
import Stats from "../../components/sections/Stats.jsx";
import Business from "../../components/sections/Business.jsx";
import Billing from "../../components/sections/Billing.jsx";
import CardDeal from "../../components/cards/CardDeal.jsx";
import Counters from "../../components/counters/Counters.jsx";
import Testimonials from "../../components/sections/Testimonials.jsx";
import Cta from "../../components/sections/Cta.jsx";
import Footer from "../../components/footer/Footer.jsx";

const LandingPage = () => {
  const heroAnimation = useScrollFadeScaleDown();
  const statsAnimation = useScrollFadeScaleDown();
  const businessAnimation = useScrollFadeScaleDown();
  const billingAnimation = useScrollFadeScaleDown();
  const cardDealAnimation = useScrollFadeScaleDown();
  const countersAnimation = useScrollFadeScaleDown();
  const testimonialsAnimation = useScrollFadeScaleDown();
  const ctaAnimation = useScrollFadeScaleDown();
  const footerAnimation = useScrollFadeScaleDown();

  const { theme } = useTheme();

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <m.div
        style={{ opacity: heroAnimation.opacity, scale: heroAnimation.scale }}
        ref={heroAnimation.Ref}
        className={` ${styles.flexCenter} ${styles.boxWidth} h-screen mx-auto`}
      >
        <Hero />
      </m.div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <m.div
            ref={statsAnimation.Ref}
            style={{ opacity: statsAnimation.opacity, scale: statsAnimation.scale }}
          >
            <Stats />
          </m.div>
          <m.div
            ref={businessAnimation.Ref}
            style={{ opacity: businessAnimation.opacity, scale: businessAnimation.scale }}
          >
            <Business />
          </m.div>
          <m.div
            ref={billingAnimation.Ref}
            style={{ opacity: billingAnimation.opacity, scale: billingAnimation.scale }}
          >
            <Billing />
          </m.div>
          <m.div
            ref={cardDealAnimation.Ref}
            style={{ opacity: cardDealAnimation.opacity, scale: cardDealAnimation.scale }}
          >
            <CardDeal />
          </m.div>
          <m.div
            ref={countersAnimation.Ref}
            style={{ opacity: countersAnimation.opacity, scale: countersAnimation.scale }}
          >
            <Counters />
          </m.div>
          <m.div
            ref={testimonialsAnimation.Ref}
            style={{ opacity: testimonialsAnimation.opacity, scale: testimonialsAnimation.scale }}
          >
            <Testimonials />
          </m.div>
          <m.div
            ref={ctaAnimation.Ref}
            style={{ opacity: ctaAnimation.opacity, scale: ctaAnimation.scale }}
          >
            <Cta />
          </m.div>
          <m.div
            ref={footerAnimation.Ref}
            style={{ opacity: footerAnimation.opacity, scale: footerAnimation.scale }}
          >
            <Footer />
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
