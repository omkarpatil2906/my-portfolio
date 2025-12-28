import { Suspense, lazy } from "react";
import Loader from "./Loader";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skill = lazy(() => import("./components/Skill"));
const Resume = lazy(() => import("./components/Resume"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
