import React from "react";
import CommentCard from "./CommentCard";

type Props = {};

export default function Comment({}: Props) {
  return (
    <div className="comment-card">
      <div className="comment-card__heading d-flex">
        <img src="https://i.pravatar.cc/100" alt="..." />
        <div className="comment-card__heading__name w-70">
          <h3>Dona</h3>
          <p>tháng 4 năm 2019</p>
        </div>
      </div>
      <div className="comment-card__text">
        Cám ơn chị Linh và hai bác. Cả gia đình em đã có một chuyến du lịch rất
        ý nghĩa và một nơi nghỉ ngơi tiện nghi.
      </div>
    </div>
  );
}
