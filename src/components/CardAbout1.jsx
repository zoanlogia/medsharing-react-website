import { hospital } from "../assets/index.js";
import styles, { layout } from "../constants/style.js";

const CardAbout1 = () => {
  return (
    <>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading}>Qui sommes-nous ?</h2>
        <hr className="w-[300px]" />

        <div className="blobImg xs:hidden md:block"></div>
        <p className={`${styles.paragraph1} max-w-[700px] xs:mt-16 xl:mt-10`}>
          <b>MEDSHARING</b> conçoit et commercialise depuis plus de 20 ans des
          applications internet pour la recherche clinique. <br />
          <br /> La société a été fondée à l’initiative d’un <b>
            chirurgien{" "}
          </b>{" "}
          investigateur, spécialiste de la recherche clinique. <br />
          <br /> Rapidement, nous nous sommes spécialisés dans l'
          <b>e-CRF</b> en créant une solution globale de recueil de données{" "}
          <b>EOL©</b>
          (Etude On Line) avec monitoring, système de validation, export de
          données. <br />
          <br /> Depuis 2006, nous sommes certifié <b>ISO 9001</b> pour
          l’ensemble de nos process de gestion et d’ingénierie. Nous sommes
          compliant <b>FDA 21 CFR part 11</b> et nous respectons les
          réglementations françaises et européennes en matière de gestion des
          sonnées de santé au travers des <b>BPC</b> (directive 2001/20/CE du 4
          avril 2001 et loi du 9 août 2004) et de la <b>RGPD</b>. <br />
          <br /> Au fil des années, notre offre s'est étoffée et se décline sous
          forme de différents services pouvant être utilisés indépendamment tels
          que <b>EolRandom©</b> (randomisation par internet),
          <b>EOLConsent©</b> (Consentement électronique), <b>EOLPharma©</b>{" "}
          (Gestion des unités de traitements)
        </p>
      </div>

      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={hospital}
          alt="card icon hospital"
          className="w-full mt-10 sm:mt-0 md:mt-10 object-contain"
        />
      </div>

      
    </>
  );
};

export default CardAbout1;
