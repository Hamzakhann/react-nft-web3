import React from "react";
import CollectionCard from "./CollectionCard";
import "./punklist.css";

const Punklist = ({ punklistData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punklistData &&
        punklistData.map((punk) => {
          return (
            <div onClick={() => setSelectedPunk(punk)} key={punk.token_id}>
              <CollectionCard
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_url}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Punklist;
