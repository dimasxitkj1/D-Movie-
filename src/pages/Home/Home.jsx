import React from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Extras1 from "../../assets/Extras1.jpg";
import Extras2 from "../../assets/Extras2.jpg";
import Extras3 from "../../assets/Extras3.jpg";

Aos.init();

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo" href="#">
          D`<span>Movie</span>
        </a>
        <a className="navbar-nav" href="">
          Sign in
        </a>
      </nav>

      {/* Section Hero */}
      <section className="hero" id="home">
        <main className="content">
          <h1>
            Most popular<span>Website</span>
          </h1>
          <h2>for search movies</h2>
          <a className="cta" href="#">
            Get started
          </a>
        </main>
      </section>

      {/* Section Extras*/}
      <section className="extras" id="section-extras">
        <div className="extras-1" data-aos="fade-right">
          <div className="extras-1-text">
            <h1>Enjoy in everywhere</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum
              minima perspiciatis? Incidunt, officiis illo!
            </p>
          </div>
          <div className="extras-1-img">
            <img src={Extras1} alt="Extras 1" />
          </div>
        </div>
        <div className="extras-2" data-aos="fade-left">
          <div className="extras-2-text">
            <h1>Easy to acces</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="extras-2-img">
            <img src={Extras2} alt="Extras 2" />
          </div>
        </div>
        <div className="extras-3" data-aos="fade-right">
          <div className="extras-3-text">
            <h1>Unlimited film</h1>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Optio, facere.
            </p>
          </div>
          <div className="extras-3-img">
            <img src={Extras3} alt="Extras 3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
