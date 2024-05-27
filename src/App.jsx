import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import { Videoplayer } from "./components/VideoPlayer/Videoplayer";

const App = () => {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we offer" />
        <Programs />
        <About play={setPlay} />
        <Title subTitle="Gallery" title="Campus Photos" />

        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Students say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
        <Videoplayer play={play} setPlay={setPlay} />
      </div>
    </div>
  );
};

export default App;
