type projectSchema = {
  name: string;
  tag: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string;
  language: string; // Programming language
};

type projectTagSchema = {
  id: string;
  name: string;
  description: string;
};

export const projectTags: projectTagSchema[] = [
  {
    id: "project",
    name: "Projects",
    description:
      "Nice frameworks, libraries, web apps. My proud, high-quality harvests.",
  },
  {
    id: "toy",
    name: "My Toys",
    description: "Fun projects",
  },
];

export const projects: projectSchema[] = [
  {
    name: "project1",
    description: "project1 description",
    html_url: "https://github.com",
    forks_count: 100,
    homepage: "wsd",
    tag: "project",
    language: "Typescript",
    stargazers_count: 100,
  },
  {
    name: "project2",
    description: "project2 description",
    html_url: "https://github.com",
    forks_count: 100,
    homepage: "wsd",
    language: "Typescript",
    tag: "project",
    stargazers_count: 100,
  },
  {
    name: "project1",
    description: "project3 description",
    html_url: "https://github.com",
    forks_count: 100,
    homepage: "wsd",
    tag: "project",
    language: "Typescript",
    stargazers_count: 100,
  },
  {
    name: "project4",
    description: "project4 description",
    html_url: "https://github.com",
    forks_count: 100,
    tag: "toy",
    homepage: "wsd",
    language: "Typescript",
    stargazers_count: 100,
  },
];
