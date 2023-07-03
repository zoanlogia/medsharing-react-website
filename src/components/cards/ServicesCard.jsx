import styles from "../../constants/style";
import SolucesIcons from "../icons/SolucesIcons.jsx";
import SectionParagraph from "../texts/SectionParagraph.jsx";

const ServicesCard = ({ src, title, alt, bold, content }) => {
  return (
    <div className="flex flex-col w-full">
      <SolucesIcons
        src={src}
        alt={alt}
        title={title}
        className={`z-10 ${styles.flexCenter} h-[400px] w-[300px] bg-black-gradient-2 rounded-[20px] box-shadow text-center border-r-4 border-b-4 p-3 border-third`}
      >
        <SectionParagraph bold={bold} content={content} />
      </SolucesIcons>
    </div>
  );
};

export default ServicesCard;
