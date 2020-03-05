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
                Hi, I am a MERN stack developer. I belong from a non-tech
                background, and I have a great passion for coding. I love to
                build robust and quality web apps that make life-simple. I want
                to be always in sync with the latest technologies and enhance
                learning.
              </p>
              <p className="hero-intro-para second">
                I started my journey as Front End developer from Google India
                scholarship 2K18. I learned Full-stack web development and a lot
                of things here at the AltCampus, located in Dharamshala, India.
              </p>
              <p className="hero-intro-para third">
                Now, I am looking forward to work with a great team who is
                making a change in this era.
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
