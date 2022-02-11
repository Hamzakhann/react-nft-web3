import Header from "./Components/Header";
import CollectionCard from "./Components/CollectionCard";
import "./App.css";

function App() {
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
