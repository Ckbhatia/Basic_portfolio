import React from "react";
import Card from "./Card";
import data from "../data/data.json";
import styled from "styled-components";

export default function Projects() {
  return (
    <ProjectContainer className="projects-container">
      <div className="projects-heading-container">
        <h2 className="projects-heading">Projects</h2>
      </div>
      <ul className="projects-list">
        {data.projects.map((project) => {
          return (
            <li key={project.id} className="projects-item">
              <Card data={project} />
            </li>
          );
        })}
      </ul>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  .projects-heading-container {
    text-align: center;
  }
  .projects-heading {
    color: #242423;
    font-size: 3.2rem;
    font-family: "PT Serif", serif;
    font-weight: 700;
  }
`;
