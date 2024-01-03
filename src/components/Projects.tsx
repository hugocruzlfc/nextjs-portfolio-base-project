"use client";

import React from "react";
import { projectsData } from "@/lib";
import { useSectionInView } from "@/hooks";
import { SectionHeading } from "./SectionHeading";
import { Project } from "./Project";

export const Projects: React.FC = ({}) => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
