import About from "./Components/About";
import Footer from "./Components/Footer";
import { Hero } from "./Components/Hero";
import Nav from "./Components/Nav";
import { Services } from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Tours from "./Components/Tours";
function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
}

export default App;
