import React from "react";
import image from "../images/motion-background.jpg";

// image alter tag
const imageAltText = "this is a backgroud image";

// sort discription
const description = `I am computer science and enginnering student. I am current learning Data structure and algorithm.`;

// skills
const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "React Js",
  "C Language",
  "C++",
  "Python",
];

const detailOrQuote = "I am passionate about solving problems and learning new technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
