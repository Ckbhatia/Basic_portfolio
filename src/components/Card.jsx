import React from "react";
import styled from "styled-components";

export default function Card({ data }) {
  const {
    name,
    imgUrl,
    description,
    technologies,
    projectHost,
    hostUrl,
    liveUrl
  } = data;
  return (
    <CardContainer className="project-container">
      <div className="project-header-container">
        <h3 className="project-heading">{name}</h3>
      </div>
      <div className="card-container">
        <div className="card-img-container">
          <img src={imgUrl} alt="project" className="card-img" />
        </div>
        <div className="card-info-container">
          <div className="card-para-container">
            <p className="card-para-text">{description}</p>
          </div>
          <div className="card-tech-info-container">
            <span className="card-tech-text">{technologies}</span>
          </div>
          <div className="card-btn-container">
            {liveUrl.length > 0 && (
              <a
                role="button"
                href={liveUrl}
                className="card-live-btn card-btn"
              >
                Live
              </a>
            )}
            <a role="button" href={hostUrl} className="card-host-btn card-btn">
              {projectHost}
            </a>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 100vh;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 1rem;
  .project-header-container {
    text-align: center;
    margin: 3rem 0;
  }
  .project-heading {
    font-size: 1.4rem;
    font-weight: 700;
  }
  .card-container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 3rem;
  }

  .card-img-container {
    -webkit-box-shadow: 0px 0px 12px 2px rgba(125, 123, 125, 1);
    -moz-box-shadow: 0px 0px 12px 2px rgba(125, 123, 125, 1);
    box-shadow: 0px 0px 12px 2px rgba(125, 123, 125, 1);
  }

  .card-info-container {
    display: grid;
    grid-template-rows: 60% 15% 10%;
    grid-gap: 1rem;
    padding: 1rem 0;
  }
  .card-para-container {
    width: 90%;
    .card-para-text {
      font-size: 1rem;
      font-weight: 400;
      color: #676767;
      line-height: 1.5;
    }
  }
  .card-tech-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #454444;
  }
  .card-btn {
    font-size: 1rem;
    background-color: transparent;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    text-decoration: none;
  }
  .card-live-btn {
    color: red;
    border: 2px solid red;
    margin-right: 0.5rem;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  .card-host-btn {
    color: black;
    border: 2px solid black;
    margin-left: 0.5rem;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  @media all and (max-width: 900px) {
    .card-container {
      grid-template-columns: 100%;
    }
    .card-info-container {
      text-align: center;
      grid-template-rows: 50% 20% 15%;
    }
    .card-para-container {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;
