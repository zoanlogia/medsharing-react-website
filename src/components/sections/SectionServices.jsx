import { vortexBulls } from "@/assets/index";
import { layout } from "@/constants/style";
import { SectionParagraph, SectionTitle } from "@/index";

const SectionServices = () => {
  return (
    <>
      <div className={`${layout.sectionInfo}`}>

        <SectionTitle>Nos Services</SectionTitle>

        <SectionParagraph bold={"Optimisez votre recherche avec Medsharing"}>
          Votre partenaire pour des solutions d&apos;e-CRF efficaces, sûres et
          faciles à utiliser
        </SectionParagraph>

        <SectionParagraph bold={"Services Medsharing - e-CRF simplifié"}>
          Nous définissons ensemble votre projet, préparons son lancement.
        </SectionParagraph>

        <SectionParagraph bold={"Consultation & Lancement"}>
          Des sessions initiales et un site de formation pour une assistance
          continue.
        </SectionParagraph>

        <SectionParagraph bold={"Support"}>
          Une assistance téléphonique dédiée pendant les heures de bureau. Des
          sessions initiales et un site de formation pour une assistance
          continue.
        </SectionParagraph>

        <SectionParagraph bold={"Hébergement & Sécurité"}>
          Hébergement sécurisé, surveillance en temps réel et sauvegardes
          horaires de vos données.
        </SectionParagraph>

        <SectionParagraph bold={"Modifications flexibles"}>
          Adaptations d&apos;e-CRF incluses. Modifications majeures sur devis.
        </SectionParagraph>

        <SectionParagraph
          bold={
            "Optez pour Medsharing pour une expérience de recherche simplifiée. Explorez notre application dès maintenant."
          }
        />
      </div>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          className="w-full mt-10 sm:mt-0 md:mt-10 object-contain"
          src={vortexBulls}
          alt="bg"
        />
      </div>
    </>
  );
};

export default SectionServices;
