import TagList from "./TagList";
import formatDate from "../lib/formatDate";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WipBadge from "./badges/WipBadge";

import React from "react";
import type { CollectionEntry } from "astro:content";
import Top3Badge from "./badges/Top3Badge";

interface Props {
  project: CollectionEntry<"projects">;
}

const ProjectCard: React.FC<Props> = (props) => {
  const { project } = props;

  return (
    <a href={`/projects/${project.slug}`} className="w-full">
      <div className="card bg-base-200 inline-block mb-4 w-full p-6">
        <div className="mb-2">
          <h2 className="text-lg font-bold justify-between flex gap-2">
            {project.data.title}
            {project.data.wip && <WipBadge />}
            {project.data.top3 && <Top3Badge />}
          </h2>
          <p className="text-sm text-neutral-content">
            {formatDate(project.data.date)}
          </p>
        </div>
        <section className="mb-3">{project.data.description}</section>
        <footer>
          <TagList tags={project.data.tags} />
        </footer>
      </div>
    </a>
  );
};

export default ProjectCard;
