import React from "react";

const Bar = (props) => {
  const { title, barActive } = props;
  return (
    <div className="bar-contain">
      <p className="bar-title atma">{title}</p>
      <div className="bar">
        <div className="bar-active" style={{ width: barActive + "%" }}></div>
      </div>
    </div>
  );
};

export default Bar;
