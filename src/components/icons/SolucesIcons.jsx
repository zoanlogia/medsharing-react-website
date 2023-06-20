const SolucesIcons = ({
  className,
  src,
  alt,
  title,
  onClick,
  children,
}) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        <img
          className={`object-contain w-[100%] h-[100%]`}
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
