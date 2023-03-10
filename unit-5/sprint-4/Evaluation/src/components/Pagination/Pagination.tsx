import React from "react";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
  
};

function createArrayOfSize(n:any) {
  return new Array(n).fill(0);
}



const Pagination = (props: PaginationProps) => {
  const {count,currentPage,updateCurrentPage}=props
  let pages = createArrayOfSize(10).map((a, i) =>{
  return <div>
  <button disabled={i+1===1} data-testid="page-btn" 
  >{i+1}</button>;
  </div>;
  })
};

export default Pagination;
