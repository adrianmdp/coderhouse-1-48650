import React from "react";

const TopRatedPage = ({ items }) => {
  console.log("Estoy en top rated");

  return (
    <div>
      <h2>TopRated</h2>
      {JSON.stringify(items)}
    </div>
  );
};

export const TopRated = React.memo(TopRatedPage);
