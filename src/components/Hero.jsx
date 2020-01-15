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
                Hi, I am a MERN stack developer. I love to build robust and
                quality PWA apps that make an impression. I like to learn and be
                in sync with new technologies.
              </p>
              <p className="hero-intro-para second">
                I started my journey as Front End developer from Google India
                scholarship. I learned Full-stack web development and a lot of
                things here at the AltCampus, located in Dharamshala.
              </p>
              <p className="hero-intro-para third">
                Now, I am looking forward to making the quality contribution to
                production level apps and gain experience by working with
                experienced developers.
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
