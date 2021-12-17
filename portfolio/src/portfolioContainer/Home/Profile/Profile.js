import React from "react";
import "./profile.css";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            
              <a
                href="https://www.linkedin.com/in/guru-prakash/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              
              <a
                href="https://github.com/guru2711"
                target="_blank"
                rel="noreferrer"
              >
                <i style={{marginLeft:"20px"}} className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hi, I'm <span className="highlighted-text">Guru</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 📈",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 💼",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Creative and enthusiastic to develop and learn new skills,
                technologies and experience
              </span>
              <br/>
              <br/>
              <span><a
              href="https://github.com/guru2711"
              target="_blank" rel="noreferrer"
             style={{color: "yellow", fontSize: "25px"}}
            >👉🏻 GitHub 👈🏻 </a></span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/1nwp3spB7_u7KwEJV7LlTQqH14cyOh3OA/view?usp=sharing"
              target="_blank" rel="noreferrer"
              // download="Guru Guru's Resume(2021)pdf.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
