import NavBar from "./navBar";
import Hero from "./hero";
import AboutMe from "./about";
import Services from "./service";
import Contact from "./contact";
import Accomplishments from "./accomplishments";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Accomplishments />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
