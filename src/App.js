import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import CollectionCard from "./Components/CollectionCard";
import "./App.css";
import axios from "axios";

function App() {
  const [punkListData, setPunkLinkData] = useState(null);

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
      } catch (e) {
        console.log(e, "wwwwwwwwwwwwww");
      }
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Hamza"}
        traits={[{ value: 7 }]}
        image={"/punks/1.jpg"}
      />
    </div>
  );
}

export default App;
