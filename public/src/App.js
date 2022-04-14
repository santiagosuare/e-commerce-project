import "./App.css";
import NavBar from "./components/NavBar";
// import { Switch } from "react";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
