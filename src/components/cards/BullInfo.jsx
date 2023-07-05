import { useState, useRef, useEffect } from "react";

const BullInfo = ({ src, title, text }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div className="img_item" onClick={handleShow}>
        <img width={300} height={300} src={src} alt="bulle" />
        <div
          ref={ref}
          className={`details rounded-[80px] border-secondary border-2 max-w-[400px] ${
            show ? "bg-[white] transition-all duration-500 ease-in" : ""
          } p-[20px] cursor-pointer`}
          style={{
            maxHeight: show ? "1000px" : "0",
            opacity: show ? "1" : "0",
          }}
        >
          <h3 className="text-secondary my-5 font-poppins font-semibold xs:text-[20px] text-[25px]">
            {title}
          </h3>
          <p className="text-[#858383] my-5 font-poppins font-semibold xs:text-[18px] text-[20px]">
            {show ? text : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default BullInfo;
