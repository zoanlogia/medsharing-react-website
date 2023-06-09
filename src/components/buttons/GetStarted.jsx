import arrowUp from "../../assets/images/arrow-up.svg";
import styles from "../../constants/style";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">C&apos;est</span>
          </p>
          <img
            width={23}
            height={23}
            className="object-contain"
            src={arrowUp}
            alt="arrow"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">parti</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
