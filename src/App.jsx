import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} /> 
      <LoadMore /> */}
      {/* <TreeView menus={menus} /> */}
      <QrCodeGenerator />
    </>
  );
}

export default App;
