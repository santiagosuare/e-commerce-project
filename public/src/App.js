import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/home" element={<NavBar />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
