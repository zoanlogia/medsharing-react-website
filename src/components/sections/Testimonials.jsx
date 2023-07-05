import { feedback } from "../../constants/index";
import styles from "../../constants/style";
import Feedback from "./Feedback";
import hrBlue from "../../assets/images/hrBlue.svg";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient" /> */}

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          {/* Ce que nos clients disent <br className="sm:block hidden" /> A propos
          de nous */}
          Ils nous font  <span style={{
             backgroundImage: `url('${hrBlue}')`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "100%",
             backgroundPosition: "left bottom",
          }}>confiance</span>
        </h1>
        {/* <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam, rerum accusantium </p>
        </div> */}
      </div>

      <div className="flex flex-wrap sm-justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
