function Pagination({page2,handlePagechange,totalPage}) {
  const prev = (
    <button
      data-testid="prev-page"
       disabled={page2===1}
      onClick={()=>handlePagechange(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page2}</button>;
  const next = (
    <button
      data-testid="next-page"
       disabled={page2===10}
       onClick={()=>handlePagechange(1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{totalPage}</b>
      </div>
    </div>
  );
}

export default Pagination;
