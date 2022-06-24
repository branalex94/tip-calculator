import "./App.css";
import Header from "./components/Header";
import CalculatorCard from "./components/CalculatorCard";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="App">
      <Header />
      <CalculatorCard />
      <Attribution
        name="Brandon Aray"
        url="https://www.frontendmentor.io/profile/branalex94"
      />
    </div>
  );
}

export default App;
