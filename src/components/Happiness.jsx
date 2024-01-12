import React from "react";
import cute from "../asset/cute.png";

const Happiness = ({ score }) => {
  let content = [];
  for (let i = 1; i <= score; i++) {
    content.push(<img key={i} src={cute} alt="cute" />);
  }

  return <div className="happiness-list">{content}</div>;
};

export default Happiness;
