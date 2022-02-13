import React, { useState, useEffect } from "react";

import "./main.css";
const Main = ({activePunk }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" alt="" src={activePunk?.image_url} />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "white" }}>
          <div className="detailsTop">
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber">{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img alt="" src="/assets/owner/punkhead.png" />
              <div>
                0x8343E13115FA50A5421ab4a8464cB6Df6eD809bA
                <div className="ownerHanle">@Hamzakhann</div>
              </div>
            </div>
            <div className="ownerDetails">
              <div className="ownerNameHandle">
                <div className="ownerLink">
                  <img src="/assets/owner/twitter.png" alt="" />
                </div>
                <div className="ownerLink">
                  <img src="/assets/owner/instagram.png" alt="" />
                </div>
                <div className="ownerLink">
                  <img src="/assets/owner/more.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
