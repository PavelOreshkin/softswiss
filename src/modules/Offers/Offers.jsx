import "./Offers.scss";
import Card from "modules/Offers/Card/Card";
import space2 from "../../assets/images/space2.png";
import space3 from "../../assets/images/space3.png";
import space4 from "../../assets/images/space4.png";
import space5 from "../../assets/images/space5.png";

export default function Offers() {
  return (
    <section className="Offers">
      <div className="Offers__wrapper">
        <h2 className="Offers__title">Offers</h2>
        <div className="Offers__cards">
          <Card
            title="Move the borders of reality!"
            subtitle="Go on a space adventure - it's possible with us!"
            isBig
            backgroundImg={space2}
          />
          <Card
            title="Space is not just stars and planets"
            subtitle="Go on a space adventure"
            backgroundImg={space3}
          />
          <Card
            title="For those who dream of stars"
            subtitle="Our offer: make your dream come true"
            backgroundImg={space4}
          />
          <Card
            title="Fulfill your fantastic dreams"
            subtitle="Space has never been so close"
            isBig
            backgroundImg={space5}
          />
        </div>
      </div>
    </section>
  );
}
