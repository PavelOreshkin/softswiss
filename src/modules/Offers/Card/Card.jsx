import "./Card.scss";
import Button from "components/Button/Button";

export default function Card({ title, subtitle, isBig, backgroundImg }) {
  const cardBig = isBig ? "Card_big" : "";
  const contentBig = isBig ? "Card__content_big" : "";
  const titleBig = isBig ? "Card__title_big" : "";
  const subtitleBig = isBig ? "Card__subtitle_big" : "";

  return (
    <article
      className={`Card ${cardBig}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${backgroundImg})`,
      }}
    >
      <div className={`Card__content ${contentBig}`}>
        <h3 className={`Card__title ${titleBig}`}>{title}</h3>
        <p className={`Card__subtitle ${subtitleBig}`}>{subtitle}</p>
        <Button type="outlined">Learn more</Button>
      </div>
    </article>
  );
}
