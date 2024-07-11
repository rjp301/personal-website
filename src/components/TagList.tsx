import { Badge } from "./ui/badge";
interface Props {
  tags: string[];
}

import React from "react";

interface Props {
  tags: string[];
}

const TagList: React.FC<Props> = (props) => {
  const { tags } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div className="badge badge-secondary">{tag}</div>
      ))}
    </div>
  );
};

export default TagList;
