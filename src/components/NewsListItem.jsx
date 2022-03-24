import React from "react";

function NewsListItem({ news, description, category }) {
  let elementClassName;

  switch (category) {
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient";
  }

  return (
    <li className={`card flex-row shadow-lg text-white ${elementClassName}`}>
      <img src="../assest/download.jpg" />
    </li>
  );
}

export default NewsListItem;
