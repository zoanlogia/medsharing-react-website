
import { lazy } from 'react';
import { motion as m } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { useScrollFadeScaleDown } from "../../hooks/useScrollFadeScale";
import styles from "../../constants/style";

import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/sections/Hero";
import useScrollToTop from '../../hooks/useScrollToTop.jsx';
const Stats = lazy(() => import("../../components/sections/Stats"))
const Business = lazy(() => import("../../components/sections/Business"))
const Billing = lazy(() => import("../../components/sections/Billing"))
const CardDeal = lazy(() => import("../../components/cards/CardDeal"))
const Counters = lazy(() => import("../../components/counters/Counters"))
const Testimonials = lazy(() => import("../../components/sections/Testimonials"))
const Cta = lazy(() => import("../../components/sections/Cta"))
const Footer = lazy(() => import("../../components/footer/Footer"))


const LandingPage = () => {
  
  const heroAnimation = useScrollFadeScaleDown();
  const statsAnimation = useScrollFadeScaleDown();
  const businessAnimation = useScrollFadeScaleDown();
  const billingAnimation = useScrollFadeScaleDown();
  const cardDealAnimation = useScrollFadeScaleDown();
  const countersAnimation = useScrollFadeScaleDown();
  const testimonialsAnimation = useScrollFadeScaleDown();
  const ctaAnimation = useScrollFadeScaleDown();
  

  useScrollToTop()

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
        className={` ${styles.flexCenter} ${styles.boxWidth} xl:h-screen mx-auto`}
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
          <div
            ref={ctaAnimation.Ref}
            style={{ opacity: ctaAnimation.opacity, scale: ctaAnimation.scale }}
          >
            <Cta />
          </div>
          <div
            // ref={footerAnimation.Ref}
            // style={{ opacity: footerAnimation.opacity, scale: footerAnimation.scale }}
          >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
