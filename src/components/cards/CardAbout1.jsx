import { Link } from "react-router-dom";
import { layout } from "../../constants/style";
import SectionTitle from "../texts/SectionTitle.jsx";
import Button from "../buttons/Button.jsx";
import Lottie1 from "../animations/lottie/Lottie1.jsx";
import { motion as m, useAnimation } from "framer-motion";
import useSlideIn from "../../hooks/useSlideIn.jsx";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CardAbout1 = () => {
  const slideInControls = useSlideIn("left", .5);
  const slideInControls1 = useSlideIn("left", 1);
  const slideInControls2 = useSlideIn("left", 1.5);
  const slideInControls3 = useSlideIn("left", 2);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className={`${layout.sectionInfo}`}>
        <m.div ref={ref} initial={{ opacity: 0, x: "-100vw" }} animate={{slideInControls}}>
        <SectionTitle size="70%">Qui sommes-nous ?</SectionTitle>
        </m.div>
        <div>

          <m.p initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls1} className="font-medium text-lg text-white mt-3">
            🏥 <strong>MEDSHARING</strong>
            <br /> Expert en recherche clinique depuis plus de 20 ans, <br />{" "}
            offre des solutions innovantes pour la collecte de données. Initié
            par un chirurgien investigateur, br nous nous spécialisons dans
            l&apos;e-CRF en fournissant une solution globale, EOL©, qui comprend
            le monitoring, un système de validation et l&apos;export de données.
          </m.p>
          <m.p initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls2} className="font-medium text-lg text-white mt-2">
            Certifiés ISO 9001 depuis 2006, nous respectons scrupuleusement les
            réglementations en vigueur dont la FDA 21 CFR part 11 et la RGPD.
            Notre offre s&apos;est étoffée au fil des années pour inclure des
            services tels que EolRandom© (randomisation par internet),
            EOLConsent© (Consentement électronique), et EOLPharma© (Gestion des
            unités de traitements).
          </m.p>
        </div>
        <m.div initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls3}>
        <Link to="https://www.medsharing.fr/pdf/z9xzkrgqip7y6qk9w6ri.pdf">
          <Button customClass="mt-5" text="📚 Demandez la brochure" />
        </Link>
        </m.div>
      </div>

      <m.div className={`${layout.sectionImgReverse}`}>
        <Lottie1 />
      </m.div>
    </>
  );
};

export default CardAbout1;
