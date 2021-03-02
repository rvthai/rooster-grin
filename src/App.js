import "styles/GlobalStyles.css";

// Components
import Hero from "components/Hero";
import Intro from "components/Intro";
import IntroImage from "components/IntroImage";
import Service from "components/Service";
import Work from "components/Work";
import WorkIcons from "components/WorkIcons";
import Product from "components/Product";
import Reviews from "components/Reviews";
import Carousel from "components/Carousel";
import Footer from "components/Footer";

const App = () => (
  <main>
    <Hero />
    <Intro />
    <IntroImage />
    <Service />
    <Work />
    <WorkIcons />
    <Product />
    <Reviews />
    <Carousel />
    <Footer />
  </main>
);

export default App;
