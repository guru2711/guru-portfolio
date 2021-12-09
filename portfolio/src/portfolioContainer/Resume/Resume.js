import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animation";
import "./Resume.css";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 80 },
    { skill: "React Js", ratingPercentage: 70 },
    { skill: "Express Js", ratingPercentage: 60 },
    { skill: "Node Js", ratingPercentage: 80 },
    { skill: "Mongo DB", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal portfolio website to showcase all my details, skills and projecs at one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
    {
      title: "Contact-Savings",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Contact-Saving Web Application is where user can save their own contacts whether it is personal or professional each user have their own contacts and they can edit and delete contacts as their wish.",
      subHeading: "Technologies used: React JS, Node JS, EXPRESS JS, MONGODB",
    },
    {
      title: "PettyCash Management",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Petty cash is a nominal amount of money readily accessible for paying expenses too small to merit writing a check or using a credit card. ... A petty cash fund can be used for office supplies, cards for customers, flowers, paying for a catered lunch for employees, or reimbursing employees for expenses.",
      subHeading:
        "Technologies used: React JS,Material UI, Node JS, EXPRESS JS, MONGODB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Full Stack Developer"}
        subHeading={"Guvi Geek PVT LTD"}
        fromDate={"july(2021)"}
        toDate={"present"}
      />
      <ResumeHeading
        heading={"BACHELOR OF ENGG IN MECHATRONICS"}
        subHeading={"Hindustan College of Engg & Tech, Coimbatore"}
        fromDate={"2014"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Christ The King Matric.Hr.Sec.School, Kumbakonam"}
        fromDate={"2012"}
        toDate={"2014"}
      />
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          link={projectsDetails.link}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learning New Skills"
        description="Apart from being a tech enthusiast and a code writer, i also love to Learn new skills and technologies."
      />
      <ResumeHeading
        heading="Sports"
        description="Watching or being responsible for Communicating and reconciling team disputes in divisional-level Football competition and VolleyBall"
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops...no internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
