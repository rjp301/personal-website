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
      <Card className="inline-block mb-4 w-full">
        <CardHeader>
          <CardTitle className="text-base font-bold justify-between flex gap-2">
            {project.data.title}
            {project.data.wip && <WipBadge />}
            {project.data.top3 && <Top3Badge />}
          </CardTitle>
          <CardDescription>{formatDate(project.data.date)}</CardDescription>
        </CardHeader>
        <CardContent>{project.data.description}</CardContent>
        <CardFooter>
          <TagList tags={project.data.tags} />
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
