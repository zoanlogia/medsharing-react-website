import { Link } from "react-router-dom";
import { features } from "../../constants";
import styles, { layout } from "../../constants/style";
import Button from "../buttons/Button";
import hrBlue  from "../../assets/images/hrBlue.svg";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" width={40} height={40} className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Medsharing une société
        <br className="sm:block hidden" /> adaptée à <span  style={{
            backgroundImage: `url('${hrBlue}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "left bottom",
          }}> votre profil</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Découvrez dès à présent nos solutions.
      </p>
      <Link to="/solutions">
        <Button styles={`mt-10`} />
      </Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
