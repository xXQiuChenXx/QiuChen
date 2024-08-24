import Link from "next/link";
import { Suspense } from "react";
import { siteConfig } from "@/config/site.config";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="grid items-center py-5 md:py-14 gap-12 pb-10 md:pb-12">
      <p className="text-zinc-300 leading-loose">
        Hi there, I{`'`}m Tai Hong, an open sourcer from Malaysia. I enjoy
        involving in design and development of software and web projects,
        enthusiastic about a broad range of topics.
        During my leisure, I interested in creating contents, arts, and explore the power of Artificial Intelligence technology,
        helping in today {`'s`} business and study field.
        Currently I likes to build web applications using NextJS.
      </p>
      <section className="space-y-4">
        <h2 className="prose prose-zinc text-xl font-semibold dark:prose-invert">
          <Link
            href="/projects"
            className="text-foreground/90 no-underline transition-colors hover:text-foreground"
          >
            Projects
            <span className="sr-only">Projects</span>
          </Link>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Projects />
        </div>
      </section>
    </main>
  );
}

async function Projects() {
  // const projects = await getProjects({ count: 4 })

  return (
    <>
      {siteConfig.projects?.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </>
  );
}
