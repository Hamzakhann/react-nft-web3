import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import axios from "axios";
import Punklist from "./Components/Punklist";

function App() {
  const [punkListData, setPunkLinkData] = useState(null);
  const [selectedPunk, setSelectedPunk] = useState(null);

  useEffect(() => {
    const getMyNfts = async () => {
      try {
        const response = await axios.get(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x9e803f4F32D938174301A99D7B0Bff503c150294",
          {
            headers: {
              "Content-Type": "text/plain"
            }
          }
        );
        console.log(response.data, ".........................");
        setPunkLinkData(response.data.assets);
        setSelectedPunk(response.data.assets[0]);
      } catch (e) {
        console.log(e, "wwwwwwwwwwwwww");
      }
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData && punkListData.length > 0 && (
        <>
          {selectedPunk ? <Main activePunk={selectedPunk} /> : ""}
          <Punklist
            punklistData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
