import "bootstrap/dist/css/bootstrap.min.css";
import "./data/assets/style.css";
import "./App.css";
import BottomBar from "./components/BottomBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <BottomBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
