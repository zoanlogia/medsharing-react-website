import styles from "../constants/style";
import saas from "../assets/saas.svg";
import GetStarted from "./GetStarted";
import { heroImg, smartphoneHero } from "../assets/index.js";
import { useTheme } from "../hooks/useTheme.jsx";

const Hero = () => {
  const {theme} = useTheme();

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 card-white rounded-[10px] mb-2`}
        >
          <img
            src={saas}
            className="w-[50px] h-[50px] border rounded-full me-2"
            alt="saas"
          />
          <p className={`${styles.paragraph1} ml-2`}>
            <span className="text-primary">L&apos;e-CRF </span>
            <span className="text-primary"> au service de vos </span>{" "}
            <span className="text-primary">études cliniques</span>
          </p>
        </div>
        <div className="flex flex-row items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px]">
            Medsharing
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ${theme === "light" ? "text-primary" : "text-white"} ss:leading-[100px] leading-[75px] w-full`}>
          l&apos;e-CRF <br /> 100% internet
        </h1>
        <p className={`${styles.paragraph} ${theme === "light" ? "text-primary" : "text-white"} max-w-[470px] mt-5`}><span className="font-semibold">MEDSHARING</span> conçoit et commercialise depuis plus de 20 ans des applications internet pour la recherche clinique.
        </p>
        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}> */}
        {/* <span className="font-semibold">MEDSHARING</span> est une entreprise qui crée des applications internet pour la recherche clinique depuis plus de 20 ans. <br /> <br /> Elle a été fondée par un <span className="font-semibold">chirurgien investigateur</span> et s&apos;est spécialisée dans <span className="font-semibold">l&apos;e-CRF</span> en proposant une solution complète de recueil de données, EOL©. <br /> <br /> L&apos;entreprise est certifiée <span className="font-semibold">ISO 9001</span> depuis 2006, respecte les réglementations françaises, européennes et la FDA 21 CFR part 11. <br /> <br /> Son offre s&apos;est diversifiée avec des services comme EolRandom© (randomisation en ligne), EOLConsent© (consentement électronique), et EOLPharma© (gestion des unités de traitement).
        </p> */}
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} ${theme === "light" ? "bg-primary p-3 rounded-2xl" : ""} md:my-10 relative`}>
        <img
          src={heroImg}
          alt="robot"
          className="w-[100%] h-[100%] relative z-index-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[1] w-[50%] h-[20%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
