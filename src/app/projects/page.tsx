import React from "react";
import { projects, projectTags } from "@/config/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My proud, high-quality treasures.",
};

const Projects = () => {
  return (
    <main className="grid items-center pt-6 md:py-8 py-4 gap-12 pb-10 md:pb-12">
      {projectTags.map((tag) => {
        return (
          <div key={tag.id} className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">{tag.name}</h1>
            <p className="text-sm text-muted-foreground dark:text-neutral-400 mb-2">{tag.description}</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects
                .filter((project) => project.tag === tag.id)
                .map((project, i) => (
                  <ProjectCard project={project} key={`${tag.id}-${i + 1}`} />
                ))}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
