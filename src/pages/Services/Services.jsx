import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import {
  Navbar,
  Footer,
  SectionServices,
  ServicesCard,
  SectionTitle,
  SectionParagraph,
} from "../../components/index";
import { bgForms, business, econsentVector, randomisationVector } from "../../assets/index";

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
        <div className={`${styles.boxWidth}`}>
          <div className={`${layout.section} lg:gap-20`}>
            <SectionServices />
          </div>
          <div
            className="bg-lines xs:hidden md:block"
            style={{
              position: "absolute",

              backgroundImage: `url('${bgForms}')`,
              backgroundRepeat: "no-repeat",
              // transform: "rotate(180deg)",
              // top: "90%",
              right: "0",
              backgroundSize: "contain",
              height: "80vh",
              width: "100%",
            }}
          />

          <div className={layout.section}>
            <div className={`${layout.sectionInfo}`}>

              <SectionTitle>A la carte</SectionTitle>

              <SectionParagraph >
                <b className={`${styles.paragraphMd} text-gradient`}>Medsharing est bien plus qu&apos;un fournisseur d&apos;e-CRF. <br /> Nous sommes en mesure de vous accompagner en amont, pendant, et en aval de votre projet.</b>
              </SectionParagraph>
              <div className="flex gap-10 flex-wrap justify-between w-full">

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
              {/* <ServicesCard
                src={econsentVector}
                alt={"econsent"}
                bold={"Prestations de Data-Management, d'analyses statistiques, de monitoring"}
                content={
                  "Medsharing est partenaire de CRO de premier plan. L'ensemble des prestations assurées par les CRO sont disponibles autour d'EOL."
                }
              /> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
