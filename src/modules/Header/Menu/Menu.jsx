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
