import "../styles/Header.scss";
import basket from "../icons/Basket.svg";
import label from "../icons/Label.svg";
import planet from "../icons/Planet.svg";
import menuClosed from "../icons/MenuClosed.svg";
import menuOpened from "../icons/MenuOpened.svg";
import Button from "../shared/Button/Button";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <div className="Header__logo">
          <img src={planet} alt="planet" />
          <img src={label} alt="label" />
        </div>
        <div className="menu">
          <Button>Home</Button>
          <Button>Products</Button>
          <img src={basket} alt="basket" className="menu__basket" />
        </div>
        <img
          src={menuClosed}
          alt="menu"
          className="menu__burger menu__burger_closed"
        />
        <img
          src={menuOpened}
          alt="menu"
          className="menu__burger menu__burger_opened"
        />
        <div className="menu_list">
          <Button>Home</Button>
          <Button>Products</Button>
          <img src={basket} alt="basket" className="menu__basket" />
        </div>
      </div>
    </header>
  );
}
