import Hero from "./hero";
import AboutMe from "./about";
import Contact from "./contact";
import ProductCardGlass from "./ProductCardGlass";
import ProjectGallery from "./projectGallery";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <section id="experience" className="product-card-page">
        <h1 className="product-card-title">Experience</h1>
        <ProductCardGlass />
      </section>
      <ProjectGallery />
      <div className="contact-footer-background">
        <Contact />
        <Footer />
      </div>
    </>
  );
}
