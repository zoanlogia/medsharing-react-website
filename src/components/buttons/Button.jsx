const Button = ({customClass ,text = "En savoir plus" }) => {
  const className = `${customClass} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`;

  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
}

export default Button;
