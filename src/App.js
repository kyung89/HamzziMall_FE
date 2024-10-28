import "./App.css";
import HeaderMain from "./components/HeaderMain";
import SlideMenu from "./components/SlideMenu";
import ScrollToButton from "./components/ScrollToButton";

function App() {
  return (
    <div className="relative h-screen">
      <HeaderMain />
      <SlideMenu />
      <ScrollToButton />
    </div>
  );
}

export default App;
