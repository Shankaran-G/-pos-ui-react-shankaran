const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm whitespace-nowrap ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
