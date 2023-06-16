import { bgForms, vortexBulls } from "../../assets/index.js";
import styles, { layout } from "../../constants/style.js";
import {SectionTitle} from "../index";

const SectionServices = () => {
  return (
    <>
      <div className={`${layout.sectionInfo}`}>
       <SectionTitle>Nos Services</SectionTitle>
        <p className={`${styles.paragraph1}`} >
          <b>
          Optimisez votre recherche avec Medsharing, votre partenaire pour des solutions d&apos;e-CRF efficaces, sûres et faciles à utiliser
          </b>
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Services Medsharing - e-CRF simplifié</b>
          Nous définissons ensemble votre projet, préparons son lancement.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Consultation & Lancement</b>
          Des sessions initiales et un site de formation pour une assistance continue.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Support</b>
          Une assistance téléphonique dédiée pendant les heures de bureau.
          Des sessions initiales et un site de formation pour une assistance continue.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Hébergement & Sécurité</b>
          Hébergement sécurisé, surveillance en temps réel et sauvegardes horaires de vos données.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Modifications flexibles</b>
          Adaptations d&apos;e-CRF incluses. Modifications majeures sur devis.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Hébergement & Sécurité</b>
          Hébergement sécurisé, surveillance en temps réel et sauvegardes horaires de vos données.
        </p>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>Optez pour Medsharing pour une expérience de recherche simplifiée. Explorez notre application dès maintenant.</b>
        </p>
        <div className="xs:hidden md:block"
          style={{
            position: "absolute",
            left: "0",
            backgroundImage: `url('${bgForms}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            height: "100vh",
            width: "100%",
          }}
        ></div>
       
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
