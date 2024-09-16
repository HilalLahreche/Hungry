import "./App.css";
import Carousel from "./components/atoms/Carousel";
import Navbar from "./components/molecules/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
}

export default App;
