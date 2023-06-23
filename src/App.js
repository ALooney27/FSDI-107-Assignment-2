import "./App.css";
import { React } from "react";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
