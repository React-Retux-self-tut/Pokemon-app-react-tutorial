import React from "react";
import './pagination.css'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage} className="pageBtn">Previous </button>}
      {gotoNextPage && <button onClick={gotoNextPage} className="pageBtn">Next </button>}
    </div>
  );
}
