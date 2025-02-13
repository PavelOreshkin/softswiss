import "../styles/global.scss";

import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import Offers from "./Offers";

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
