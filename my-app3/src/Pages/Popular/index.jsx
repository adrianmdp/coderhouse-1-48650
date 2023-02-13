import React from "react";

const PopularPage = ({ items }) => {
  console.log("Estoy en popular");

  return (
    <div>
      <h2>Popular</h2>
      {JSON.stringify(items)}
    </div>
  );
};

export const Popular = React.memo(PopularPage);
