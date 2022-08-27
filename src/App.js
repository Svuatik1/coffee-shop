import MainHeader from "./components/main-header/main-header";
import MainAboutUs from "./components/main-about-us/main-about-us";
import MainOurBest from "./components/main-our-best/main-our-best";
import MainFooter from "./components/main-footer/main-footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainAboutUs />
      <MainOurBest />
      <MainFooter />
    </div>
  );
}

export default App;
