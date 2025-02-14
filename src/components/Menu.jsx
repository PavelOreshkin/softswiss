import "../styles/Menu.scss";
import basket from "../icons/Basket.svg";
import basketHover from "../icons/BasketHover.svg";
import menuClosed from "../icons/MenuClosed.svg";
import menuOpened from "../icons/MenuOpened.svg";
import Button from "../shared/Button/Button";
import { useState } from "react";

export default function Menu() {
  const [openedBurger, setOpenedBurger] = useState(false);
  const handleToggleBurger = () => setOpenedBurger((prev) => !prev);

  return (
    <>
      <div className={openedBurger ? "Menu Menu__list" : "Menu"}>
        <Button>Home</Button>
        <Button>Products</Button>
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
      </div>
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
