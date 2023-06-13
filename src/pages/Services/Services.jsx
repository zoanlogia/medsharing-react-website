import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import {
  cleaning,
  creating,
  dots,
  grandma,
  starsBg,
} from "../../assets/index.js";
import BullInfo from "../../components/BullInfo.jsx";

const Services = ({ onClick }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} w-full overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${layout.section} flex-auto`}>
            <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px]">
              Nos services
              <hr className="w-[300px]" />
              <img className="my-2 w-[100px]" src={dots} alt="dots" />
            </h1>

            <div
              className="circular_hero bg-[#D9D9D9] rounded-[80px] py-[40px] px-[30px] cursor-pointer relative overflow-hidden"
              onClick={onClick}
            >
              <div
                className="absolute top-0 right-0 opacity-[0.2] w-[200px] h-[200px]"
                style={{
                  backgroundImage: `url('${starsBg}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-primary my-5 font-poppins font-semibold xs:text-[28px] text-[30px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                aspernatur vero quod nihil quaerat cupiditate cum ipsum qui
                laboriosam hic maxime, asperiores molestias porro optio. Vitae
                voluptas at amet architecto.
              </p>

              <div
                className={`img_container ${styles.flexCenter} xxs:flex-wrap lg:flex-nowrap xl:flex-nowrap`}
              >
                <BullInfo
                  src={cleaning}
                  title={"toto"}
                  text={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aspernatur vero quod nihil quaerat cupiditate cum ipsum qui laboriosam hic maxime, asperiores molestias porro optio. Vitae voluptas at amet architecto."
                  }
                />
                <BullInfo
                  src={creating}
                  title={"toto"}
                  text={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aspernatur vero quod nihil quaerat cupiditate cum ipsum qui laboriosam hic maxime, asperiores molestias porro optio. Vitae voluptas at amet architecto."
                  }
                />
                <BullInfo
                  src={grandma}
                  title={"toto"}
                  text={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aspernatur vero quod nihil quaerat cupiditate cum ipsum qui laboriosam hic maxime, asperiores molestias porro optio. Vitae voluptas at amet architecto."
                  }
                />
              </div>
            </div>
          </div>
          <div className={layout.section}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
