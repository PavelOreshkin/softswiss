import { useState } from "react";
import "./Menu.scss";
import basket from "../../../assets/icons/Basket.svg";
import basketHover from "../../../assets/icons/BasketHover.svg";
import menuClosed from "../../../assets/icons/MenuClosed.svg";
import menuOpened from "../../../assets/icons/MenuOpened.svg";
import Button from "components/Button/Button";

export default function Menu() {
  const [openedBurger, setOpenedBurger] = useState(false);
  const handleToggleBurger = () => setOpenedBurger((prev) => !prev);

  return (
    <>
      <menu className={openedBurger ? "Menu Menu__list" : "Menu"}>
        <li>
          <Button>Home</Button>
        </li>
        <li>
          <Button>Products</Button>
        </li>
        <li>
          <div className="Menu__basket-wrapper">
            <img
              src={basket}
              alt="basket"
              className="Menu__basket Menu__basket_normal"
            />
            <img
              src={basketHover}
              alt="basket"
              className="Menu__basket Menu__basket_hover"
            />
          </div>
        </li>
      </menu>
      <img
        src={openedBurger ? menuOpened : menuClosed}
        alt="menu"
        className="Menu__burger"
        tabIndex={0}
        onClick={handleToggleBurger}
      />
    </>
  );
}
