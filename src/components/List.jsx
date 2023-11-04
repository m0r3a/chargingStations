import React from "react";

function List({ coordinates, toggleStatus }) {
  return (
    <div id='list'>
      {coordinates.map((coord) => (
        <div key={coord.id}>
          id: {coord.id} | status: {coord.status}
          <button onClick={() => toggleStatus(coord.id)}>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;