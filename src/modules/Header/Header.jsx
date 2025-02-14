import "./Header.scss";
import label from "../../assets/icons/Label.svg";
import planet from "../../assets/icons/Planet.svg";
import Menu from "modules/Header/Menu/Menu";

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
