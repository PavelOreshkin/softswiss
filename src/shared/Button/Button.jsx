import "./Button.scss";

export default function Button({
  type = "default",
  onClick,
  className,
  children,
}) {
  const baseClass = "button";
  const typeClass = type ? `button_${type}` : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${typeClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
