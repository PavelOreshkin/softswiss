import "../styles/Footer.scss";
import rocket from "../icons/Rocket.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={rocket} alt="rocket" />
      <p className="Footer__text">Exciting space adventure!</p>
    </div>
  );
}
