const BadgeRounded = ({ src, content, children, onClick }) => {
  return (
    <div className="w-[220px] h-[70px]  shadow-xl bg-[#D9D9D9] rounded-full p-5 my-3 cursor-pointer" onClick={onClick} >
      <div className="flex items-center h-full">
        <img src={src} alt="" className="w-[35px] h-[35px] object-contain" />
        <p className="font-poppins font-normal text-[15px] text-[#000000] ml-2">
          {content}
        </p>
        {children}
      </div>
    </div>
  );
};

export default BadgeRounded;
