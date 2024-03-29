import { type CollectionEntry, getCollection } from "astro:content";
import Experience from "./Experience.jsx";

const experiences = (await getCollection("experience")).filter(
  (i) => !i.data.draft
);

const categories = await getCollection("experienceCategory");

const sortDates = (
  a: CollectionEntry<"experience">,
  b: CollectionEntry<"experience">
) => {
  const date_a = Date.parse(a.data.date_end || "2100-01");
  const date_b = Date.parse(b.data.date_end || "2100-01");
  return date_b - date_a;
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export type Props = {};

export default function ExperienceTabs(props: Props) {
  return (
    <Tabs defaultValue={categories[0].id} className="w-full">
      <TabsList className={`grid w-full grid-cols-3`}>
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.data.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <Card>
            {experiences
              .filter((exp) => exp.data.category.id === category.id)
              .sort(sortDates)
              .map((exp) => (
                <Experience key={exp.id} experience={exp}></Experience>
              ))}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
