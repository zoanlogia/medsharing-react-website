import { hrBlue } from "../../assets/index";

const SectionTitle = ({children, size}) => {
  return (
    <>
      <h1
        className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px]"
        style={{
          backgroundImage: `url('${hrBlue}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${size}`,
          backgroundPosition: "left bottom",
        }}
      >{children}
      </h1>
      </>
  );
};

export default SectionTitle;
