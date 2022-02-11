import React from "react";
import "./collectionCard.css";
const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
      </div>
      <div className="priceContainer">
        <img alt="" src="/assets/weth.png" className="wethImage" />
        <div className="price">{traits[0]?.value}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
