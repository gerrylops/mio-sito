import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, imgUrl }) => {
  return (
    <div className="skill-card">
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
