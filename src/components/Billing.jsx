import { apple, bill } from "../assets";
import styles, { layout } from "../constants/style";

apple;

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="md:w-[70%] md:h-[100%] sm:w-[100%] sm:h-[100%] relative z-[5]"
        />
        <div className={`${layout.sectionInfo} bg-white-gradient card-white`}>
          <h2 className={styles.heading}>
            <div className="absolute z-[3] -left-1 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
            Gérer vos études <br className="sm:block hidden" />
            en un click
          </h2>
          <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
            Administrez vos études cliniques en toute simplicité et autonomie. <br /> <br />
            De l&apos;Attaché de Recherche Clinique au Médecin Investigateur, collectez vos données en toute sécurité. <br /> <br />
            
           Nos options de monitoring et de validation des données saisies vous permettrons de faire les demandes de correction et de suivre en temps réel la progression de la saisie et la validation des données.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Billing;
