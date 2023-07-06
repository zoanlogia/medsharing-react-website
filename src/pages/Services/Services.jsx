import { useTheme } from "../../hooks/useTheme.jsx";
import styles from "../../constants/style.js";
import econsentVector from "../../assets/images/econsentVector.svg";
import business from "../../assets/images/business.svg";
import randomisationVector from "../../assets/images/randomisationVector.svg";
import useScrollToTop from "../../hooks/useScrollToTop.jsx";
import { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../../components/navbar/Navbar.jsx"));
const SectionParagraph = lazy(() => import("../../components/texts/SectionParagraph.jsx"));
const SectionTitle = lazy(() => import("../../components/texts/SectionTitle.jsx"));
const ServicesCard = lazy(() => import("../../components/cards/ServicesCard.jsx"));
const Footer = lazy(() => import("../../components/footer/Footer.jsx"));

const Services = () => {

  useScrollToTop();

  const { theme } = useTheme();

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <Suspense fallback={<div>Chargement...</div>}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
              <SectionTitle>A la carte</SectionTitle>
              <div className="flex flex-col">

                <SectionParagraph>
                  <b className={`${styles.paragraphMd} text-[#edf2f4]`}>
                    Medsharing est bien plus qu&apos;un fournisseur
                    d&apos;e-CRF. <br /> Nous sommes en mesure de vous
                    accompagner en amont, pendant, et en aval de votre projet.
                  </b>
                </SectionParagraph>

                <div className="flex mt-5 xxs:flex-wrap lg:flex-nowrap gap-5">
                  <ServicesCard
                    src={econsentVector}
                    alt={"econsent"}
                    bold={"Besoins spécifiques"}
                    content={
                      "Dans les cas d'études complexes, de registres interconnectés ou de liens à réaliser avec des bases de données (images, prélèvements biologiques...), Medsharing réalise des développements complémentaires sur mesure dans un engagement forfaitaire."
                    }
                  />

                  <ServicesCard
                    src={business}
                    alt={"business"}
                    bold={"Prestations de conseil"}
                    content={
                      "Dans le cas où votre structure souhaite être accompagnée dans la structuration de votre étude, Medsharing propose des prestations au forfait de conseil adaptées à vos besoins."
                    }
                  />

                  <ServicesCard
                    src={randomisationVector}
                    alt={"econsent"}
                    bold={"Formation"}
                    content={
                      "Les prestations e-crf de Medsharing comprennent systématiquement une journée de formation. Medsharing propose des sessions complémentaires si nécessaire."
                    }
                  />
                  <ServicesCard
                    src={econsentVector}
                    alt={"econsent"}
                    bold={"Prestations de data management"}
                    content={
                      "Medsharing est partenaire de CRO de premier plan. L'ensemble des prestations assurées par les CRO sont disponibles autour d'EOL."
                    }
                  />
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </Suspense>
        </div>
  );
};

export default Services;
