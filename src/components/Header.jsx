import "../styles/Header.scss";
import label from "../icons/Label.svg";
import planet from "../icons/Planet.svg";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo">
          <img src={planet} alt="planet" />
          <img src={label} alt="label" />
        </div>
        <Menu />
      </div>
    </header>
  );
}
