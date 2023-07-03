import { useTheme } from "../../hooks/useTheme.jsx";
import styles, { layout } from "../../constants/style.js";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import {
  bigArrow,
  cleaning,
  creating,
  dots,
  grandma,
  starsBg,
} from "../../assets/index.js";
import BullInfo from "../../components/BullInfo.jsx";
import CardParagraph from "../../components/CardParagraph.jsx";

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
            <div>
              <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px]">
                Nos services
              </h1>
              <hr className="w-[300px]" />
              <img className="my-2 w-[100px]" src={dots} alt="dots" />
              <div className="relative">
                <CardParagraph posTop={"0"} posBottom={"auto"} />
                <CardParagraph  posBottom={"auto"} posTop={"170px"}/>
                <CardParagraph  posBottom={"auto"} posTop={"340px"}/>
                <CardParagraph  posBottom={"auto"} posTop={"510px"}/>
                <CardParagraph  posBottom={"auto"} posTop={"680px"}/>
                <CardParagraph  posBottom={"auto"} posTop={"850px"}/>
                <img className="w-[100%]" src={bigArrow} alt="timeline" />
              </div>
            </div>
            <div
              className="circular_hero"
              >
                <div className="border-white border rounded-[80px] py-[40px] px-[30px] relative overflow-hidden box-shadow">
              <div
                className="absolute top-0 right-0 opacity-[0.2] w-[200px] h-[200px]"
                style={{
                  backgroundImage: `url('${starsBg}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-white my-5 font-poppins font-semibold xs:text-[28px] text-[30px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                aspernatur vero quod nihil quaerat cupiditate cum ipsum qui
                laboriosam hic maxime, asperiores molestias porro optio. Vitae
                voluptas at amet architecto.
              </p>

              <div
                className={`img_container flex justify-evenly xxs:flex-wrap lg:flex-nowrap xl:flex-nowrap cursor-pointer`} onClick={onClick}
              >
                <BullInfo
                  src={cleaning}
                  title={"toto"}
                  text={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aspernatur vero quod nihil quaerat cupiditate cum ipsum qui laboriosam hic maxime, asperiores molestias porro optio. Vitae voluptas at amet architecto."
                  }
                  show={true}
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
          </div>
          <div className={layout.section}></div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Services;
