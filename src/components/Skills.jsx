import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { skills } from "../data/data.json";

export default function Skills() {
  return (
    <SkillsContainer className="skills-container">
      <Container>
        <Row>
          <Col sm={12} className="skills-inner-container">
            <div className="skills-header-container">
              <h2 className="skills-heading">Skills</h2>
            </div>
            <div className="skills-container">
              <ul className="skills-list-container">
                {skills.map((skill, i) => (
                  <li key={i} className="skills-item">
                    <span className="skill-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  .skills-header-container {
    margin: 4rem 0;
    text-align: center;
    .skills-heading {
      color: #242423;
      font-size: 3.2rem;
      font-family: "PT Serif", serif;
      font-weight: 700;
    }
  }
  .skills-text {
    color: #c4a627;
    font-size: 1.8rem;
  }

  .skills-item {
    display: inline-block;
  }

  .skill-text {
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    display: inline-block;
    color: #c4a627;
    border: 1px solid #c4a627;
    border-radius: 2px;
  }
`;
