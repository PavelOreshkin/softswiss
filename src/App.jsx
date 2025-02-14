import "./styles/global.scss";

import Banner from "modules/Banner/Banner";
import Footer from "modules/Footer/Footer";
import Header from "modules/Header/Header";
import Info from "modules/Info/Info";
import Offers from "modules/Offers/Offers";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Offers />
      <Info />
      <Footer />
    </div>
  );
}
