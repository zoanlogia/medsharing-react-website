import {
  SectionParagraph,
  SolucesIcons,
} from "../../components/index";
import styles from "../../constants/style";

const ServicesCard = ({src, title, alt, bold, content}) => {
  return (
    <div>
      
      <div className={`${styles.boxWidth}`}>
        <div className={`flex flex-wrap w-[400px] h-[400px]  gap-10 mt-10`}>
          <SolucesIcons
            widthImg={"400px"}
            heightImg={"400px"}
            src={src}
            alt={alt}
            title={title}
            className={`z-10 ${styles.flexCenter} bg-black-gradient-2 rounded-[20px] box-shadow p-10 text-center border-r-4 border-b-4 border-third object-contain`}
          >
             <SectionParagraph
            bold={bold}
            content={content}
          />
          </SolucesIcons>
         
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
