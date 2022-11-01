import React from "react";

type Props = {
  postsPerPage: number;
  setCurrentPage: (value: number) => void;
};

export default function Pagination({ postsPerPage, setCurrentPage }: Props) {
  let totalPosts = 83;
  let pages:number[] = [];
  let currentPage = 1;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className="btn btn-warning mx-2 rounded-0 btnPagination"
            key={index}
            onClick={() => {
                setCurrentPage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
