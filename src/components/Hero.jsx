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
                A expert Full Stack Developer with years of experience
              </span>
            </div>
            <div className="hero-intro-container">
              <p className="hero-intro-para first">
                Hi, I am a self-taught Full-stack developer. 
                I have a passion to build robust and quality products that makes people lives easy.
              </p>
              <p className="hero-intro-para third">
                I spend free time to learn about entrepreneurship stuff, tools and technologies, contributing to Open Source Projects and StackOverflow.
              </p>
              <p className="hero-intro-para fourth">
              I have expertise of building Full Stack apps for product companies, contracts, freelance and personal apps.
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
    margin-top: 0.5rem; 
    margin-bottom: 0.8rem; 
  }
`;
