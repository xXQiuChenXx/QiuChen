export interface projectSchema {
  name: string;
  tag: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  homepage?: string;
  language: string; // Programming language
}

export interface projectTagSchema {
  id: string;
  name: string;
  description: string;
}

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
    description: "Some fun projects",
  },
  {
    id: "legacy",
    name: "Legacy",
    description: "Projects that I have not maintained for a long time",
  },
];

export const projects: projectSchema[] = [
  {
    name: "Job Web App",
    description: "A joke application build with ASP.NET Core MVC",
    html_url: "https://github.com/xXQiuChenXx/JokeWebApp",
    tag: "toy",
    language: "C#",
    stargazers_count: 0,
  },
  {
    name: "OneDrive Index",
    description: "Personal OneDrive file listing web application with many additional features",
    html_url: "https://github.com/xXQiuChenXx/onedrive-index",
    language: "Typescript",
    tag: "project",
    stargazers_count: 0,
  },
  {
    name: "E5Renew-TS",
    description: "For renew Microsoft E5 Subscription only",
    html_url: "https://github.com/xXQiuChenXx/E5Renew",
    tag: "project",
    language: "Typescript",
    stargazers_count: 0,
  },
  {
    name: "UTS Library System",
    description:
      "Collage library system. For basic understanding of MVC concept and HTML only.",
    html_url: "https://github.com/xXQiuChenXx/UTS-LIBRARY-SYSTEM",
    tag: "legacy",
    language: "C#, HTML",
    stargazers_count: 0,
  },
];
