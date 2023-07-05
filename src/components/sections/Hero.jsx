import styles from "../../constants/style";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import saas from "../../assets/images/saas.svg";
import hrBlue from "../../assets/images/hrBlue.svg";
import heroCity from "../../assets/images/heroCity.svg";
import GetStarted from "../buttons/GetStarted.jsx";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} lg:h-screen`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center my-[5rem] p-3 rounded-[50px] mb-2 border shadow-2xl`}
        >
          <img
            src={saas}
            className="w-[50px] h-[50px] border rounded-full me-2"
            alt="saas"
          />
          <p className={`${styles.paragraph1} ml-2`}>
            <span className="text-white">L&apos;e-CRF </span>
            <span className="text-white"> au service de vos </span>{" "}
            <span className="text-white">études cliniques</span>
          </p>
        </div>
        <div className="flex flex-row items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] leading-[75px]">
            Medsharing
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Link to="/devis">
              <GetStarted />
            </Link>
          </div>
        </div>
        <h1
          className={`font-poppins font-semibold ss:text-[68px] text-[52px] ${
            theme === "light" ? "text-primary" : "text-white"
          } ss:leading-[100px] leading-[75px] w-full`}
         
        > <span  style={{
          backgroundImage: `url('${hrBlue}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "left bottom",
        }}>l&apos;e-CRF </span>
          <br /> 100% internet
        </h1>
        <p
          className={`${styles.paragraph} ${
            theme === "light" ? "text-primary" : "text-white"
          } max-w-[470px] mt-5`}
        >
          <span className="font-semibold">MEDSHARING</span> conçoit et
          commercialise depuis plus de 20 ans des applications internet pour la
          recherche clinique.
        </p>
       
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} ${
          theme === "light" ? "bg-primary p-3 rounded-2xl" : ""
        } md:my-10 relative`}
      >
        <img rel="preload" 
        
          src={heroCity}
          srcSet={
            `${heroCity} 1200w, 
             ${heroCity}?w=200 200w,
             ${heroCity}?w=400 400w, 
             ${heroCity}?w=800 800w, 
             ${heroCity}?w=1024 1024w`}
          alt="robot"
          className="w-[100%] h-[100%] relative z-index-[5]"
        />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
