function createArrayOfSize(totalPages) {
  return new Array(totalPages).fill(0);
}

function Pagination({totalPages,currentPage,handlePageChange}) {
  let pages = [1].map((a, i) => <button data-testid="page-btn" 
  onClick={()=>handlePageChange(i+1)}>{i+1}</button>);

  return <div>{currentPage}</div>;
}

export default Pagination;
