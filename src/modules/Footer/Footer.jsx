import "./Footer.scss";
import rocket from "../../assets/icons/Rocket.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={rocket} alt="rocket" />
      <p className="Footer__text">Exciting space adventure!</p>
    </footer>
  );
}
