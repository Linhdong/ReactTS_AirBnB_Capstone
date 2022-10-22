import React from "react";
import CommentCard from "./CommentCard";

type Props = {};

export default function Comment({}: Props) {
  return (
    <div className="comment--colums row">
      <div className="col-6">
        <CommentCard />
      </div>
      <div className="col-6">
        <CommentCard />
      </div>
    </div>
  );
}
