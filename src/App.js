import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import OurCoffeePage from "./pages/our-coffe-page";
import ForYourPlesurePage from "./pages/for-your-plesure-page";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/our_coffee" element={<OurCoffeePage />}></Route>
          <Route
            path="/for_your_plesure"
            element={<ForYourPlesurePage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
