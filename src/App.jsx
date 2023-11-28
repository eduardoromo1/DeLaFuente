import Header from "./components/header/header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import "./App.css";
import Testimonials from "./components/testimonials/Testimonials";
import Mvion from "./components/experience/experience";

const App = () => {
  return (
    <>
      <Header />
      <Mvion/>
      <About />
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default App;
