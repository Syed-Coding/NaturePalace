import React from "react";

export const Title = ({ mainTitle, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {mainTitle} <span>{subTitle}</span>
      </h2>
    </div>
  );
};
