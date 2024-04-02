import React from "react";

function Pagination() {
  return (
    <div class="table-footer">
      <p>{/* <?= $count_text . ' ' . $total_records ?> */}</p>
      <div class="download">
        <button onclick="openModal()" class="download-btn">
          Download
        </button>
      </div>
      
    </div>
  );
}

export default Pagination;
