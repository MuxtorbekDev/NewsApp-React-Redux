import React from "react";

function NewsListItem({ name, description, category }) {
  let elementClassName;

  switch (category) {
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-warning bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient";
  }

  return (
    <li className={`card ${elementClassName}`}>
      <img
        src="https://www.mca.gov.in/content/dam/mca/images/latest_news_image.jpg"
        alt="img"
        className=" "
        style={{ objectFit: "cober" }}
      />
      <div className="text-box">
        <h4 className="card-title fs-5">{name}</h4>
        <p className="card-title fs-6">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border bg-light rounded-bill">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </span>
    </li>
  );
}

export default NewsListItem;
