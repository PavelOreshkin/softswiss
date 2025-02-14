import "../styles/Footer.scss";
import rocket2 from "../icons/Rocket.png";

export default function Footer() {
  return (
    <div className="Footer">
      <img src={rocket2} alt="rocket" />
      <p className="Footer__text">Exciting space adventure!</p>
    </div>
  );
}
