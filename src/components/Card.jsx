import "../styles/Card.scss";
import Button from "../shared/Button/Button";

export default function Card({ title, subtitle, isBig, backgroundImg }) {
  const cardBig = isBig ? "Card_big" : "";
  const contentBig = isBig ? "Card__content_big" : "";
  const titleBig = isBig ? "Card__title_big" : "";
  const subtitleBig = isBig ? "Card__subtitle_big" : "";

  return (
    <div
      className={`Card ${cardBig}`}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={`Card__content ${contentBig}`}>
        <h2 className={`Card__title ${titleBig}`}>{title}</h2>
        <p className={`Card__subtitle ${subtitleBig}`}>{subtitle}</p>
        <Button type="outlined">Learn more</Button>
      </div>
    </div>
  );
}
