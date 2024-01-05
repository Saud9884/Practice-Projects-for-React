import "./App.css";
import Accordian from "./components/accordian";
import ModelTest from "./components/custom-model/model-test";
import TabTest from "./components/custom-tabs/tabs-test";
import GithubProfile from "./components/github-profile";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMore from "./components/load-more";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete-withApi";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"} /> 
      <LoadMore /> 
      <TreeView menus={menus} />
      <QrCodeGenerator /> */}
      {/* <LightDarkMode /> 
     <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> 
      <TabTest /> 
      <ModelTest /> */}
      {/* <GithubProfile /> */}
      {/* <SearchAutocomplete /> */}
      <TicTacToe />
    </>
  );
}

export default App;
