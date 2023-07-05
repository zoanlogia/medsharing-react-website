const SolucesIcons = ({ className, src, alt, title, onClick, children, width, height }) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        <img
          width={width}
          height={height}
          className={`object-contain`}
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
