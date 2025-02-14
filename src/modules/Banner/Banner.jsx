import "./Banner.scss";
import earth from "../../assets/images/EARTH.png";
import Content from "./Content/Content";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__wrapper">
        <Content />
        <img className="Banner__image" src={earth} alt="earth" />
      </div>
    </div>
  );
}
