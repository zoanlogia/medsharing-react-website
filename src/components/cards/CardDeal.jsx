import { Link } from "react-router-dom";
import { hrBlue, medsharingManagement } from "../../assets/index";
import styles, { layout } from "../../constants/style";
import {Button} from "../../components/index";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading}>
          Des données de qualités
          <br className="sm:block hidden" /> pour des{" "}
          <span
            style={{
              backgroundImage: `url('${hrBlue}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "left bottom",
              
            }}
          >
            études 
          </span> réussies
        </h2>
        <p className={`${styles.paragraph1} max-w-[470px] mt-5`}>
          EOL©, conçu par MEDSHARING, assure une optimisation supérieure de la
          qualité du recueil des données. Il fournit des contrôles de cohérence
          automatisés durant la saisie, et vérifie systématiquement les formats
          des données. <br />
          <br /> Il optimise et limite les contrôles des bornes et des listes de
          choix. Il facilite également le contrôle à distance en temps réel,
          permettant de détecter les non-conformités rapidement. EOL© offre un
          historique complet de toutes les modifications (Audit-trail) pour une
          traçabilité maximale. <br />
          <br /> Il fournit un suivi en temps réel de la progression de la
          saisie et permet une vérification immédiate lors de l&apos;apparition
          d&apos;effets indésirables ou de déviations du protocole.
        </p>
        <Link to="/services">
          <Button styles="mt-10" />
        </Link>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={medsharingManagement}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
