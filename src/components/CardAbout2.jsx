import styles, { layout } from "../constants/style.js";
import { aboutVector } from "../assets/index.js";
import { Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardAbout2 = () => {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
      marginTop: theme.spacing(2),
      palette: {
        light: "#fff",
      },
    },
  }));
  
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
        <h2 className={`${styles.headingMd}`}>
          Adapté à tous types d&apos;études 
          {/* médicales et para-médicales */}
        </h2>
        <Root>
          <Divider
            variant="middle"
            textAlign="center"
            sx={{
              "&::before, &::after": {
                borderColor: "white",
              },
            }}
          >
            <Chip label="⭐️" sx={{
              
                backgroundColor: "white",
                color: "white",
                borderColor: "white",
                typography: {
                  color: "black",
                }
              
            }}/>
          </Divider>
        </Root>
        <ul>
          <li>
            <p className={styles.paragraph1}>
              <span>👉</span> Études pharmaco–épidémiologiques
            </p>
          </li>
          <li>
            <p className={styles.paragraph1}>
              <span>👉</span> Matério ou pharmaco-vigilance
            </p>
          </li>
          <li>
            <p className={styles.paragraph1}>
              <span>👉</span> Registres, Observatoires, Cohortes
            </p>
          </li>
          <li>
            <p className={styles.paragraph1}>
              <span>👉</span> Etudes sur les alicaments
            </p>
          </li>
          <li>
            <p className={styles.paragraph1}>
              <span>👉</span> Enquêtes Médico-Marketing
            </p>
          </li>
        </ul>

        <h2 className={`${styles.headingSm} mt-5`}>
          Et aux acteurs de la recherche publique et privée
        </h2>
        <Root>
          <Divider
            variant="middle"
            textAlign="center"
            sx={{
              "&::before, &::after": {
                borderColor: "white",
              },
            }}
          >
            <Chip label="⭐️" sx={{
              
                backgroundColor: "white",
                color: "white",
                borderColor: "white",
                typography: {
                  color: "black",
                }
              
            }}/>
          </Divider>
        </Root>
        <div className="flex gap-10 md:flex-row flex-col">
          <ul>
            <li>
              <p className={styles.paragraphMd}>
                <span>📖 </span>
                Acteurs Institutionnels
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> Unités INSERM, CNRS
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> Agences de recherches
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> Instituts de veille sanitaire
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span>
                Associations ou groupes académiques
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> DRRC
              </p>
            </li>
          </ul>

          <ul>
            <li>
              <p className={styles.paragraphMd}>
                <span>🕵️‍♀️ </span>
                Acteurs privés
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> CRO
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> Industrie pharmaceutique
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span>
                Industrie du dispositif médical
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span> Industrie agro-alimentaire
              </p>
            </li>
            <li>
              <p className={styles.paragraph1}>
                <span>👉</span>
                Industrie cosmétique et para-pharmaceutique.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardAbout2;
