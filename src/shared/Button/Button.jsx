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

{
  /* <Button>Home</Button>
<Button type="filled" color="primary">
  Learn more
</Button>
<Button type="outlined" color="primary">
  Learn more 2
</Button>
<Button type="primary" color="primary">
  Read more
</Button> */
}
