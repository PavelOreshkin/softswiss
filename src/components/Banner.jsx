import "../styles/Banner.scss";
import Button from "../shared/Button/Button";
import earth from "../icons/Earth.svg";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__wrapper">
        <div className="Banner__content">
          <h1 className="Banner__title">
            Discover the vast expanses of
            <span className="Banner__title_highlight"> space</span>
          </h1>
          <p className="Banner__subtitle">
            Where the possibilities are
            <span className="Banner__subtitle_highlight"> endless!</span>
          </p>
          <Button type="filled">Learn more</Button>
        </div>

        <img className="Banner__image" src={earth} alt="earth" />
      </div>
    </div>
  );
}
