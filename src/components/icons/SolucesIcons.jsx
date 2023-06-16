const SolucesIcons = ({
  className,
  src,
  alt,
  title,
  onClick,
  heightImg,
  widthImg,
  children,
}) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        <img
          className={`w-[${widthImg}] h-[${heightImg}] object-contain`}
          src={src}
          alt={alt}
        />
        <p className="font-poppins font-semibold text-[18px] leading-[24px] my-2">
          {title}
        </p>
      </div>
      <div>{children}</div>
    </>
  );
};

export default SolucesIcons;
