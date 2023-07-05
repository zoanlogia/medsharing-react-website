import styles, { layout } from "../../constants/style";
import aboutVector from "../../assets/images/aboutVector.svg";
import hrBlue from "../../assets/images/hrBlue.svg";
import IconCheckBlue from "../../assets/images/IconCheckBlue.svg";
import useSlideIn from "../../hooks/useSlideIn.jsx";
import { motion as m} from "framer-motion";

const CardAbout2 = () => {
  const slideInControls = useSlideIn("right", 0.5);
  const slideInControls1 = useSlideIn("right", 1);
  const slideInControls2 = useSlideIn("right", 1.5);
  const slideInControls3 = useSlideIn("right", 2);
  const slideInControls4 = useSlideIn("right", 2.5);
  const slideInControls5 = useSlideIn("right", 3);
  const slideInControls6 = useSlideIn("right", 3.5);
  const slideInControls7 = useSlideIn("right", 4);
  const slideInControls8 = useSlideIn("right", 4.5);
  const slideInControls9 = useSlideIn("right", 5);
  const slideInControls10 = useSlideIn("right", 5.5);
  const slideInControls11 = useSlideIn("right", 6);
  const slideInControls12 = useSlideIn("right", 6.5);
  const slideInControls13 = useSlideIn("right", 7);
  const slideInControls14 = useSlideIn("right", 7.5);
  const slideInControls15 = useSlideIn("right", 8);


  return (
    <section
      className={`${layout.section} relative flex-col-reverse sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow w-full xxs:px-2`}
    >
      
      <div className={`${layout.sectionImgReverse} xl:mr-0`}>
        <img
          src={aboutVector}
          width={700}
          height={500}
          className=" mt-10 sm:mt-0 md:mt-10 object-contain"
          alt="hospital"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.headingMd}`}>
          Adapté à tous types d&apos;études
          <img className="h-[10px] w-full object-cover" src={hrBlue} alt="hr" />
        </h2>

        <ul className="mt-5">
          <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls}>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
              <span>Études pharmaco–épidémiologiques</span>
            </p>
          </m.li>
          <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls1}>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
              <span>Matério ou pharmaco-vigilance</span>
            </p>
          </m.li>
          <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls2}>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
              <span>Registres, Observatoires, Cohortes</span>
            </p>
          </m.li>
          <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls3}>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
              <span>Etudes sur les alicaments</span>
            </p>
          </m.li>
          <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls4}>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
              <span>Enquêtes Médico-Marketing</span>
            </p>
          </m.li>
        </ul>

        <h2 className={`${styles.headingSm} mt-5`}>
          Et aux acteurs de la recherche publique et privée
        </h2>
        <img className="w-full h-[10px] object-cover" src={hrBlue} alt="hr" />
        <div className="flex gap-10 md:flex-row flex-col">
          <ul className="mt-5">
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls1}>
              <p className={`${styles.paragraphMd} mb-2`}>
                <span>📖 </span>
                Acteurs Institutionnels
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls5}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Unités INSERM, CNRS</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls6}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Agences de recherches</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls7}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Instituts de veille sanitaire</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls8}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Associations ou groupes académiques</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls9}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>DRRC</span>
              </p>
            </m.li>
          </ul>

          <ul className="mt-5">
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls10}>
              <p className={`${styles.paragraphMd} mb-2`}>
                <span>🕵️‍♀️ </span>
                Acteurs privés
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls11}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>CRO</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls12}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Industrie pharmaceutique</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls13}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Industrie du dispositif médical</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls14}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Industrie agro-alimentaire</span>
              </p>
            </m.li>
            <m.li initial={{ opacity: 0, x: "-100vw" }} animate={slideInControls15}>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} width={20} height={20} alt="check icon" />
                <span>Industrie cosmétique et para-pharmaceutique.</span>
              </p>
            </m.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardAbout2;
