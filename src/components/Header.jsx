import "../styles/Header.scss";
import basket from "../icons/Basket.svg";
import label from "../icons/Label.svg";
import planet from "../icons/Planet.svg";
import Button from "../shared/Button/Button";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo">
          <img src={planet} alt="planet" />
          <img src={label} alt="label" />
        </div>
        <div className="Header__menu">
          <Button>Home</Button>
          <Button>Products</Button>
          <img src={basket} alt="basket" />
        </div>
      </div>
    </header>
  );
}
