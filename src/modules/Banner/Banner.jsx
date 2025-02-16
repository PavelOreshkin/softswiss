import "./Banner.scss";
import earth from "../../assets/images/EARTH.png";
import Content from "./Content/Content";

export default function Banner() {
  return (
    <section className="Banner">
      <div className="Banner__wrapper">
        <Content />
        <img className="Banner__image" src={earth} alt="earth" />
      </div>
    </section>
  );
}
