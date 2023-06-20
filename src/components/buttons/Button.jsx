const Button = ({customClass ,text = "En savoir plus", action, type }) => {
  const className = `${customClass} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`;

  return (
    <button type={type} className={className} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
