import React from "react";
import { social } from "../data/data.json";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

export default function ContactForm() {
  return (
    <Div className="contact-container">
      <div className="contact-heading-container">
        <h2 className="contact-heading">Contact</h2>
      </div>
      <div className="contact-para-container">
        <p className="contact-para">Want to contact me?</p>
        <a className="contact-email-link" href="mailto:chetansain86@gmail.com">
          chetansain86@gmail.com
        </a>
      </div>
      <div className="contact-social-link-container">
        <ul className="contact-list-container">
          <li className="contact-social-item">
            <a href={`${social.github}`} className="contact-social-link">
              <span className="contact-social-logo">
                <FaGithub />
              </span>
            </a>
          </li>
          <li className="contact-social-item">
            <a href={`${social.linkedin}`} className="contact-social-link">
              <span className="contact-social-logo">
                <FaLinkedinIn />
              </span>
            </a>
          </li>
          <li className="contact-social-item">
            <a href={`${social.twitter}`} className="contact-social-link">
              <span className="contact-social-logo">
                <FaTwitter />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  .contact-heading-container {
    margin-bottom: 4rem;
    text-align: center;
  }
  .contact-heading {
    color: #242423;
    font-size: 3.2rem;
    font-family: "PT Serif",serif;
    font-weight: 700;
    }
  }
  .contact-list-container {
    display: flex;
    justify-content: center;
    align-items: space-between;
  }
  .contact-para-container {
    text-align: center;
    .contact-para {
      font-size: 1.8rem;
    }
    .contact-email-link {
      text-align: center;
      color: #333;
      font-size: 1.6rem;
      font-weight: 700;
      text-decoration: none;
    }
  }
  .contact-social-link-container {
    margin: 3rem 0;
  }
  .contact-social-item {
    border: 2px solid #c4a627;
    border-radius: 50px;
    padding: .5rem;
    margin: 0 1rem;
  }
  .contact-social-logo > svg {
    fill: #c4a627;
    font-size: 2rem;
    &:hover {
      fill: #ad9426;
    }
  }
`;
