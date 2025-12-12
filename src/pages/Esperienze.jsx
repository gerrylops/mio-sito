import React from "react";
import SkillBadge from "../components/SkillBadge";
import { experiencesList } from "../data/experiences";
import JobCard from "../components/JobCard";

const Esperienze = () => {
  return (
    <div id="esperienze" className="container">
      <h2>La mia esperienza</h2>
      <div>
        {experiencesList.map((job) => (
          <JobCard
            key={job.id}
            role={job.role}
            company={job.company}
            logo={job.logo}
            intro={job.intro}
            description={job.description}
            techStack={job.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Esperienze;
