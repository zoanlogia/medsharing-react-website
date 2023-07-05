import quotes from "../../assets/images/quotes.svg";

const Feedback = ({ content, title, name, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        width={42}
        height={27}
        className="object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">
        {content}
      </p>

      <div className="flex flex-row h-[48px] w-[48px]">
        <img src={img} alt={name} width={48} height={48} className="object-fill rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] ">
            {name}
          </h4>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
