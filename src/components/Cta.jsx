import { Link } from "react-router-dom";
import styles from "../constants/style";
import Button from "./Button";

const Cta = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Essayez dès à présent Eol!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sur la base d&apos;un devis clair et détaillé, MEDSHARING prend
          l&apos;engagement de réaliser votre projet sans dépassement budgétaire
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Link to="/devis">
          <Button text="🧾 Demandez un Devis" />
        </Link>
      </div>
    </section>
  );
};

export default Cta;
