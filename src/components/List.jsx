import React from "react";

function List({ coordinates, toggleStatus }) {
  return (
    <div className="list">
      <p id="list-item">
        {coordinates.map((coord) => (
          <p key={coord.id}>
            id: {coord.id} | status: {coord.status}
          </p>
        ))}
      </p>
    </div>
  );
}

export default List;
