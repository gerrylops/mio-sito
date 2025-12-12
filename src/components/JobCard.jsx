import React from "react";
import SkillBadge from "./SkillBadge";

const JobCard = ({ role, company, logo, intro, description, techStack }) => {
  return (
    <div className="job-card">
      <img src={logo} className="company-logo" alt="Logo" />

      <div>
        <h3>{role}</h3>
        <p className="company">{company}</p>

        {intro && (
          <p style={{ marginBottom: "15px", color: "#d1d5db" }}>{intro}</p>
        )}

        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <SkillBadge key={index} text={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
