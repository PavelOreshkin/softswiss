import "./Content.scss";
import Button from "components/Button/Button";

export default function Content() {
  return (
    <div className="Content">
      <h1 className="Content__title">
        Discover the vast expanses of
        <span className="Content__title_highlight"> space</span>
      </h1>
      <p className="Content__subtitle">
        Where the possibilities are
        <span className="Content__subtitle_highlight"> endless!</span>
      </p>
      <Button type="filled">Learn more</Button>
    </div>
  );
}
