/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import about_img from "../../assets/images/graduation2.webp";
import play_icon from "../../assets/images/play-icon.png";

const About = ({ play }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="play-icon"
          className="play-icon"
          onClick={() => play(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT BOWEN UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today </h2>
        <p>
          Bowen University takes pride in its commitment to academic excellence,
          innovation, entrepreneurship, and community engagement. Our colleges
          and staff are dedicated to providing you with a world-class education
          that prepares you for success in your chosen field.
        </p>
        <p>
          With our range of diverse courses, we deliver an educational
          experience that will enable the younger generation to meet their
          future career ambitions. We do this through our teaching, research,
          and partnerships with organizations worldwide.
        </p>
        <p>
          Bowen is committed to providing quality education and has a reputation
          for academic excellence. Bowen’s academic programs are offered across
          several faculties, including Agriculture, Humanities, Law, Health
          Sciences, Social and Management Sciences, Arts, Computing and
          Communications, Engineering, and Environmental Sciences.
        </p>
      </div>
    </div>
  );
};

export default About;
