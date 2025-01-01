import React, { useEffect, useState } from "react";
import Work from "../components/Work";
import DeeperSection from "../components/DeeperSection";



const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const Home = () => {
  const heroRef = React.useRef(null);
  const isHeroVisible = useOnScreen(heroRef);

  const deeperSectionRef = React.useRef(null);
  const isDeeperVisible = useOnScreen(deeperSectionRef);

  const workSectionRef = React.useRef(null);
  const isWorkVisible = useOnScreen(workSectionRef);

  return (
    <>
      <main ref={heroRef} className={`hero ${isHeroVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-text-headline"></span>
            <span className="hero-text-paragraph">
              <h1 className="hero-text-p">
                Research based software development UX - UI and Storytelling
                crafted with care for you and your brand
              </h1>
              <p>Exploring technology, creativity and innovation</p>
            </span>
            <div className="hero-text-btn">
              <a href="#services" className="btn">
                See the Services
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img className="foto-cv" src="foto-cv.jpg" alt="fotoCv"></img>
              <p className="hero-image-text">
                <strong>About Me</strong>
                <br />
                I'm a passionate web developer with expertise in modern
                frameworks such as React, Vue and more<br></br>My goal is to
                deliver amazing user experience and clean scalable solutions
              </p>
            </div>
          </div>
        </div>
      </main>
      <section
        ref={deeperSectionRef}
        className={`deeper-section ${isDeeperVisible ? "visible" : ""}`}
      >
        <DeeperSection />
      </section>
      <section
        ref={workSectionRef}
        className={`work-section ${isWorkVisible ? "visible" : ""}`}
      >
        <Work />
      </section>
    </>
  );
};

export default Home;
