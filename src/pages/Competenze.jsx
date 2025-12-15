import React from "react";
import SkillCard from "../components/SkillCard";
import { skillsList } from "../data/skills";
import "./Competenze.css";

const Competenze = () => {
  return (
    <div id="competenze" className="container">
      <h2>Le mie competenze</h2>
      <div className="skills-grid">
        {skillsList.map((skill) => (
          <SkillCard key={skill.id} title={skill.title} imgUrl={skill.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default Competenze;
