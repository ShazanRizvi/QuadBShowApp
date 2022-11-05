import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <>
      <Link
        to={`/singleshow/${id}`}
        style={{
          textDecoration: "none",
          color: "black",
          display: "inline-block",
          margin: "1rem, auto",
        }}
        className="listitem"
      >
        <div className="card text-bg-dark mb-3" style={{ width: "10rem" }}>
          <img src={image} className="card-img-top" alt={name} />
          <div className="card-body">
            <h7 className="card-title">
              {name}
            </h7>
            <p className="card-text">{rating}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListItem;
