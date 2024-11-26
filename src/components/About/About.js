import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Raj Jaiswal</strong>.  I’m originally from India and currently pursuing a Bachelor of Technology in Computer Science and Engineering at RCC Institute of Information Technology. My academic journey has been shaped by a keen interest in problem-solving and technology, which has driven me to explore diverse areas in the field.




            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Throughout my studies, I’ve worked on a variety of impactful projects that have allowed me to sharpen my technical skills and collaborate effectively within teams. Notable among these is Udyog Sarathi, a platform designed to empower Persons with Disabilities in the job market, and Bhojan, a full-stack food delivery application that streamlined user experiences with secure payment integration and real-time order tracking. These projects not only earned recognition from my peers and instructors but also deepened my passion for web and backend development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Working on collaborative projects has been an incredibly fulfilling experience, as it allows me to contribute to meaningful solutions while learning from others. Looking ahead, I’m excited to explore more innovative projects, particularly in backend development and scalable system design.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
