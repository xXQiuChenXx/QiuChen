import Link from "next/link";
import { formatNumber } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleIcon } from "./Icons";

export type projectSchema = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  homepage: string;
  language: string; // Programming language
};

interface ProjectCardProps {
  project: projectSchema;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="rounded-none">
      <Link
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full flex-col transition-colors hover:bg-muted/25"
      >
        <CardHeader className="flex-1">
          <CardTitle className="line-clamp-1 text-base">{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description ?? "No description provided"}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon
              className="mr-1 size-3 fill-current text-[#3178c6]"
              aria-hidden="true"
            />
            {project.language ?? "Unknown"}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 size-3" aria-hidden="true" />
            {formatNumber(project.stargazers_count)}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
