import Footer from "./components/Footer.js";
import Hero from "./components/Hero..js";
import ImageSlider from "./components/ImageSlider.js";
import Navbar from "./components/Navbar.js";
import Offers from "./components/Offers.js";
import Plan from "./components/Plan.js";
import Rooms from "./components/Rooms.js";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
