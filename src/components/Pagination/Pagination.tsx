import React, {useState} from "react";

type Props = {
  postsPerPage: number;
  setCurrentPage: (value: number) => void;
  totalRow:number
};

export default function Pagination({ postsPerPage, setCurrentPage, totalRow }: Props) {
  const[active, setActive] = useState('btn btn-warning  mx-2 rounded-0 btnPagination');
  let pages:number[] = [];
  let currentPage = 1;
  for (let i = 1; i <= Math.ceil(totalRow / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className={active}
            key={index}
            onClick={() => {
                setCurrentPage(page);
                // setActive('btn btn-warning  mx-2 rounded-0 btnPagination')
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
