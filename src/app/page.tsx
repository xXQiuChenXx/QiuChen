import Link from "next/link";
import { Suspense } from "react";
import { siteConfig } from "@/config/site.config";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="grid items-center pt-6 md:py-8 py-4 gap-12 pb-10 md:pb-12">
      blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah
      blah blahblah blah blahblah blah blahblah blah blahblah blah blahF
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
  )
}
