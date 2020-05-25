import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

export default function Hero() {
  return (
    <HeroContainer className="hero-container">
      <Container>
        <Row>
          <Col sm={12} className="hero-intro-inner-container">
            <div className="hero-intro-header-container">
              <h1 className="hero-intro-heading">I am Chetan Kumar</h1>
              <span className="hero-intro-text">
                An aspiring quality Full Stack Developer
              </span>
            </div>
            <div className="hero-intro-container">
              <p className="hero-intro-para first">
                Hi, I am a self-taught Full-stack developer. 
                I have a passion to build robust and quality web apps that makes people lives easy.
                Love for coding keeps me motivated towards learning.
              </p>
              <p className="hero-intro-para second">
                I had started my journey to code when I got the Google India Scholarship 2k18
                <br />
                My interest to learn Full Stack web development led me to join AltCampus Bootcamp.
                Learned too many things apart from just coding here, such as, “learned how to learn”, communication, collaboration, 
                and living In the community to name a few.
              </p>
              <p className="hero-intro-para third">
                I spend my free time to contribute to Open Source Projects and StackOverflow that help me to grow a better developer.
              </p>
              <p className="hero-intro-para fourth">
              I have proficient hands-on experience of building Full Stack apps, includes useful personal and freelance apps.
              </p>
              <p className="hero-intro-para fifth">
               Now, I am looking forward to working with a team of ambitious 
               folks who are striving to do something different and amazing.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  .hero-intro-header-container {
    margin: 2rem 0;
    text-align: center;
    .hero-intro-heading {
      color: #242423;
      font-size: 3.6rem;
      font-family: "PT Serif", serif;
      font-weight: 700;
    }
  }
  .hero-intro-text {
    color: #c4a627;
    font-size: 1.8rem;
  }
  .hero-intro-para {
    color: #3d3d3b;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;
