import styles, { layout } from "../../constants/style";
import aboutVector from "../../assets/images/aboutVector.svg";
import hrBlue from "../../assets/images/hrBlue.svg";
import IconCheckBlue from "../../assets/images/IconCheckBlue.svg";


const CardAbout2 = () => {
  
  return (
    <section
      className={`${layout.section} relative flex-col-reverse sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow w-full xxs:px-2`}
    >
      <div className="blue__gradient w-[45%] h-[50%] absolute"></div>
      <div className={`${layout.sectionImgReverse} xl:mr-0`}>
        <img
          src={aboutVector}
          className="w-full h-full mt-10 sm:mt-0 md:mt-10 object-contain"
          alt="hospital"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.headingMd}`} >
          Adapté à tous types d&apos;études 
          <img className="w-full h-[10px] object-cover" src={hrBlue} alt="hr" />
        </h2>
        
        <ul className="mt-5">
          <li>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} alt="check icon" /><span>Études pharmaco–épidémiologiques</span> 
            </p>
          </li>
          <li>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} alt="check icon" /><span>Matério ou pharmaco-vigilance</span> 
            </p>
          </li>
          <li>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} alt="check icon" /><span>Registres, Observatoires, Cohortes</span> 
            </p>
          </li>
          <li>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} alt="check icon" /><span>Etudes sur les alicaments</span> 
            </p>
          </li>
          <li>
            <p className={`${styles.paragraph1} flex gap-2`}>
              <img src={IconCheckBlue} alt="check icon" /><span>Enquêtes Médico-Marketing</span> 
            </p>
          </li>
        </ul>

        <h2 className={`${styles.headingSm} mt-5`}>
          Et aux acteurs de la recherche publique et privée
        </h2>
        <img className="w-full h-[10px] object-cover" src={hrBlue} alt="hr" />
        <div className="flex gap-10 md:flex-row flex-col">
          <ul className="mt-5">
            <li>
              <p className={`${styles.paragraphMd} mb-2`}>
                <span>📖 </span>
                Acteurs Institutionnels
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Unités INSERM, CNRS</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Agences de recherches</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Instituts de veille sanitaire</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Associations ou groupes académiques</span>

              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>DRRC</span> 
              </p>
            </li>
          </ul>

          <ul className="mt-5">
            <li>
              <p className={`${styles.paragraphMd} mb-2`}>
                <span>🕵️‍♀️ </span>
                Acteurs privés
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>CRO</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Industrie pharmaceutique</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Industrie du dispositif médical</span>

              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Industrie agro-alimentaire</span> 
              </p>
            </li>
            <li>
              <p className={`${styles.paragraph1} flex gap-2`}>
                <img src={IconCheckBlue} alt="check icon" /><span>Industrie cosmétique et para-pharmaceutique.</span>

              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardAbout2;
