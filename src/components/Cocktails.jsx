import React from "react";
import { Link } from "react-router-dom";

function Cocktails({ id, name, info, image, glass }) {
  console.log(id);
  return (
    <div className="main-cocktails">
      <div className="image-container">
        <img className="drink-image" alt="img" src={image} />
      </div>
      <div className="drink-info">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>
          <button className="details-btn">details</button>
        </Link>
      </div>
    </div>
  );
}

export default Cocktails;
