import React from "react";

function FilterTaskList({ setShowIncomplete, showIncomplete }) {
  return (
    <div>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          onChange={(e) => setShowIncomplete(e.target.checked)}
          checked={showIncomplete}
        />
      </div>
    </div>
  );
}

export default FilterTaskList;
